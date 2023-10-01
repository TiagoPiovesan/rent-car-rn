import { View, Text } from 'react-native'
import { Container } from './styles'

interface BulletProps {
  active?: boolean
}

export default function Bullet({ active=false }: BulletProps) {
  return (
    <Container active={active} />
  )
}
