import { View, Text, TextInputProps } from 'react-native'
import { Container, InputText, InputContainer } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export default function Input({ iconName, value,...rest }: InputProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const theme = useTheme()

  function handleInputFocus() {
    setIsFocus(true)
  }

  function handleInputBlur() {
    setIsFocus(false)
    setIsFilled(!!value)
  }

  return (
    <Container>
      <InputContainer
        isFocused={isFocus}
      >
        <Feather
          name={iconName}
          size={24}
          color={isFocus || isFilled ? theme.colors.main : theme.colors.text_detail}
        />
      </InputContainer>

      <InputText
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocus}
      />
    </Container>
  )
}
