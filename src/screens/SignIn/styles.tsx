import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  margin-top: 115px;
`

export const Form = styled.View`
  width: 100%;
  margin: 64px 0px;
`


export const Title = styled.Text`
  font-size: ${RFValue(40)};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)};
  margin-top: 16px;
`

export const Footer = styled.View``
