import { View, Text, TextInputProps } from 'react-native'
import { Container, InputText, InputContainer } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export default function Input({ iconName, ...rest }: InputProps) {
  const theme = useTheme()
  return (
    <Container>
      <InputContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </InputContainer>
      <InputText {...rest} />
    </Container>
  )
}
