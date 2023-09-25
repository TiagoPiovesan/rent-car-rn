import { View, Text, ActivityIndicator } from 'react-native'
import {
  Container,
  Title
} from './styles'
import { useTheme } from 'styled-components';

interface Props {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export default function Button({ title, color, enabled = true, loading = false, onPress, ...rest  }: Props) {
  const theme = useTheme()

  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? 0.5 : 1 }}
    >
      {loading ?
        <ActivityIndicator color={theme.colors.shape} /> :
        <Title>{title}</Title>
      }
    </Container>
  )
}
