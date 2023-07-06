import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from "./styles";
import { StatusBar } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';

export function Home() {
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
    </Container>
  )
}
