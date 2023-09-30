import { RFValue } from 'react-native-responsive-fontsize'
import { css } from 'styled-components';
import styled from 'styled-components/native'

interface InputPropsProps {
  isFocused: boolean;
}

export const Container = styled.View<InputPropsProps>`
  flex-direction: row;
  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  ` }
`

export const InputContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-right: 2px;
`

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
`
