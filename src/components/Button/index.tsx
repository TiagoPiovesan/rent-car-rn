import { View, Text } from 'react-native'
import {
  Container,
  Title
} from './styles'
import { useTheme } from 'styled-components';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export default function Button({ title, color, onPress, ...rest  }: Props) {
  const theme = useTheme()

  return (
    <Container {...rest} color={color ? color : theme.colors.main} onPress={onPress} >
      <Title>{title}</Title>
    </Container>
  )
}
