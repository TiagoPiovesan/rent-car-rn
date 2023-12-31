import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header };

  padding-top: 96px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.secondary_600 };
  margin-top: 40px;
`

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail };
  font-family: ${({ theme }) => theme.fonts.primary_400 };
  text-align: center;
  margin-top: 16px;
  line-height: ${RFValue(25)}px;
`

export const Footer = styled.View`
  align-items: center;
  width: 100%;
  margin: 80px 0;
`

