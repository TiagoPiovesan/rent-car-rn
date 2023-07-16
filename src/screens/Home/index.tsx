import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from "./styles";
import { StatusBar } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';
import Car from "../../components/Car";

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Caupé',
    rent: {
      period: 'AO DIA',
      price: 120
    },
    thumbnail: "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2022/audi/rs-7-sportback/base-rs-7-sportback/sedan/exteriorColors/2022_audi_rs-7-sportback_base_001_t3t3.png"
  }

  const carDataTwo = {
    brand: 'Porche',
    name: 'PANAMERA',
    rent: {
      period: 'AO DIA',
      price: 300
    },
    thumbnail: "https://www.pngplay.com/wp-content/uploads/13/Porsche-Panamera-No-Background.png"
  }


  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
            Total de 12 Carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <Car data={ carDataOne } />
      <Car data={ carDataTwo } />
    </Container>
  )
}
