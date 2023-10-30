import React, { useEffect, useState } from 'react'
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  MyCarsButton
} from "./styles";
import { Ionicons } from '@expo/vector-icons'
import { Alert, StatusBar } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync'
import { database } from '../../database';
import { Car as CarModel } from '../../database/model/Car';

import Logo from '../../assets/logo.svg';
import Car from "../../components/Car";
import Load from '../../components/Load'

import { useNavigation } from "@react-navigation/native";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO"
import { useTheme } from 'styled-components';


export function Home() {
  const [cars, setCars] = useState<CarModel[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();
  const theme = useTheme();
  const netInfo = useNetInfo();

  async function offlineSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {

        const response = await api
          .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
        const { changes, latestVersion } = response.data
        return { changes, timestamp: latestVersion}
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users
        if (user) {
          const response = await api.post(`/users/sync`, user).catch(console.log)
        }
      }
    });
  }

  useEffect(() => {
    let isMounted = true;
    async function fetchCars(){
      try {
        const carCollection = database.get<CarModel>('cars')
        const cars = await carCollection.query().fetch()

        if (isMounted) {
          setCars(cars)
        }

      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchCars()
    return () => {
      isMounted = false
    }
  }, [])

  // Sempre que voltar a ter conexão, sincroniza os dados
  useEffect(() => {
    if (netInfo.isConnected === true) {
      offlineSynchronize();
    }
  }, [netInfo.isConnected])


  // useEffect(() => {
  //   if (netInfo.isConnected) {
  //     Alert.alert("Você está online")
  //   } else {
  //     Alert.alert("Você está OFFLINE")
  //   }

  // }, [netInfo.isConnected])

  function handleMyCarsOpen(car: CarDTO) {
    navigation.navigate("MyCars")
  }

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
            Total de 12 Carros
          </TotalCars>
        </HeaderContent>
      </Header>

      { loading ? <Load /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) =>
              <Car data={ item } onPress={() => handleCarDetails(item)} />
          }
        />
      }

      {/* <MyCarsButton onPress={handleMyCarsOpen}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton> */}
    </Container>
  )
}
