import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled(SafeAreaView)`
  width: 100%;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.header };
  justify-content: center;
  padding: 25px;
  padding-top: 40px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.secondary_600 };
  font-size: ${RFValue(30)}px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.secondary_400 };
  font-size: ${RFValue(15)}px;
  margin-top: 24px;
`

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
`

export const AppointmentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  font-family: ${({ theme }) => theme.fonts.primary_400 };
  font-size: ${RFValue(15)}px;
`

export const AppointmentQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title };
  font-family: ${({ theme }) => theme.fonts.secondary_500 };
  font-size: ${RFValue(15)}px;
`

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;
  margin-top: -10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_secondary };
`

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail };
  font-family: ${({ theme }) => theme.fonts.secondary_500 };
  font-size: ${RFValue(10)}px;
`

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`


export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  font-family: ${({ theme }) => theme.fonts.primary_400 };
  font-size: ${RFValue(10)}px;
`

export const ArrowIcon = styled(AntDesign).attrs({
  name: "arrowright"
})`
  font-size: ${RFValue(20)}px;
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.text };
`
