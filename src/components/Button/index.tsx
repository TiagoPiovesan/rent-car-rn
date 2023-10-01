import { View, Text, ActivityIndicator } from 'react-native'
import {
  Container,
  Title
} from './styles'
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export default function Button({ title, color, loading = false, light = false, ...rest  }: Props) {
  const theme = useTheme()

  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      style={{ opacity: (rest.enabled === false || loading === true) ? 0.5 : 1 }}
    >
      {loading ?
        <ActivityIndicator color={theme.colors.shape} /> :
        <Title light={ light }>{title}</Title>
      }
    </Container>
  )
}
