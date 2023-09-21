import { FlatList, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { CarDTO } from "../../dtos/CarDTO"
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary };
`

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header };
  justify-content: flex-end;
`

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 32px 24px;
`

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400 };;
  color: ${({ theme }) => theme.colors.text };
`

// Forma de forçar a tipagem de uma Flat list
export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVercialScrollIndicator: false
})`
`

export const MyCarsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 22px;
  right: 22px;
  background-color: ${({ theme }) => theme.colors.main};
`

