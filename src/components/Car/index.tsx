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
import { useNetInfo } from '@react-native-community/netinfo';


interface Props extends TouchableOpacityProps {
 data: CarModel;
}

export default function Car({ data, ...rest }: Props) {
  const MotorIcon = getAcessotyIcon(data.fuel_type)
  const netInfo = useNetInfo()

  return (
    <Container {...rest}>
      <Details>
        <Brand>{ data.brand }</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{ data.period }</Period>
            <Price>
              {`R$ ${netInfo.isConnected === true ? data.price : "..."} `}
            </Price>
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
