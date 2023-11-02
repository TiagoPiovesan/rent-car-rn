import { View, Text } from 'react-native'
import {
  Container,
  Name
} from './styles'
import { SvgProps } from 'react-native-svg';
import { memo } from 'react';

interface Props {
  name: string;
  icon: React.FC<SvgProps>
}

function AccessoryComponent({
  name,
  icon: Icon
}: Props) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  )
}

export const Accessory = memo(AccessoryComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.icon ,nextProps.icon) && prevProps.name === nextProps.name
})
