import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
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
      <CarList
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={ carDataOne } />}
      />

    </Container>
  )
}
