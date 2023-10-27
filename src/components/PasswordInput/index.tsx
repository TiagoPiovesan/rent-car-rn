import { TextInputProps } from 'react-native'
import { Container, InputText, InputContainer } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'],
  value?: string
}

export default function PasswordInput({ iconName, value, ...rest }: InputProps) {
  const theme = useTheme()
  const [keyVisible, setKeyVisible] = useState(true)

  const [isFocus, setIsFocus] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus() {
    setIsFocus(true)
  }

  function handleInputBlur() {
    setIsFocus(false)
    setIsFilled(!!value)
  }

  function handleKeyVisible() {
    setKeyVisible(!keyVisible)
  }

  return (
    <Container>
      <InputContainer isFocused={isFocus}>
        <Feather
          name={iconName}
          size={24}
          color={isFocus || isFilled ? theme.colors.main : theme.colors.text_detail}
        />
      </InputContainer>

      <InputText
        {...rest}
        autoCorrect={false}
        secureTextEntry={keyVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocus}
      />

      <BorderlessButton onPress={handleKeyVisible}>
        <InputContainer isFocused={isFocus}>
          <Feather
            name={!keyVisible ? "eye" : "eye-off" }
            size={24}
            color={theme.colors.text_detail}
            />
        </InputContainer>
      </BorderlessButton>
    </Container>
  )
}
