import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CarImages = styled.View`
  margin-top: 16px;
`

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`

export const Description = styled.View`
`

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`

export const Rent = styled.View``

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
  text-transform: uppercase;
`

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  text-align: justify;
  margin-top: 23px;
`;

export const Acessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px;
`
