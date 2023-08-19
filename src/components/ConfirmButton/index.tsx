import { View, Text, TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export default function ConfirmButton({title, ...rest}) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
