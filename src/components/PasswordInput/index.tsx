import { TextInputProps } from 'react-native'
import { Container, InputText, InputContainer } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export default function PasswordInput({ iconName, ...rest }: InputProps) {
  const theme = useTheme()
  const [keyVisible, setKeyVisible] = useState(true)

  function handleKeyVisible() {
    setKeyVisible(!keyVisible)
  }

  return (
    <Container>
      <InputContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </InputContainer>
      <InputText {...rest} secureTextEntry={keyVisible} />

      <BorderlessButton onPress={handleKeyVisible}>
        <InputContainer>
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
