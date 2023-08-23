import React, { useEffect, useState } from 'react'
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from "./styles";
import { StatusBar } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';
import Car from "../../components/Car";
import Load from '../../components/Load'

import { useNavigation } from "@react-navigation/native";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO"

import Skeleton from 'react-loading-skeleton'


export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();

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

    </Container>
  )
}
