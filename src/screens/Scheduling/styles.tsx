import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native'

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary };
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
  font-size: ${RFValue(32)}px;
`

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0px;
`

export const DateInfo = styled.View`
  width: 30%;
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  font-family: ${({ theme }) => theme.fonts.secondary_500 };
  font-size: ${RFValue(10)}px;
`

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.primary_500 };
  font-size: ${RFValue(15)}px;
  ${({ selected, theme }) => !selected && css`
    /* border-bottom: 1px solid ${ theme.colors.text }; */
    padding-bottom: 5px;
  `}
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})``

export const Footer = styled.View`
  padding: 24px;
`

