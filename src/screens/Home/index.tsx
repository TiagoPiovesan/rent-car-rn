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
import { StatusBar } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';
import Car from "../../components/Car";
import Load from '../../components/Load'

import { useNavigation } from "@react-navigation/native";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO"
import { useTheme } from 'styled-components';


export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('/cars')
        setCars(response.data)

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])


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

      <MyCarsButton onPress={handleMyCarsOpen}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  )
}
