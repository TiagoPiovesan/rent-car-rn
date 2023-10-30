import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles'

import { Car as CarModel } from '../../database/model/Car';
import { getAcessotyIcon } from '../../utils/getAcessotyIcon';


interface Props extends TouchableOpacityProps {
 data: CarModel;
}

export default function Car({ data, ...rest }: Props) {
  const MotorIcon = getAcessotyIcon(data.fuel_type)

  return (
    <Container {...rest}>
      <Details>
        <Brand>{ data.brand }</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{ data.period }</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode="contain"
      />

    </Container>
  )
}
