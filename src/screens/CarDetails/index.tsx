import Accessory from '../../components/Accessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SchedulingDetails } from '../SchedulingDetails/index';
import { Scheduling } from '../Scheduling/index';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params as CarDTO

  function handleConfirmRental(){
    navigation.navigate('Scheduling')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {navigation.goBack()}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{ car.brand }</Brand>
            <Name>{ car.name }</Name>
          </Description>
          <Rent>
            <Period>{ car.rent.period }</Period>
            <Price> R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {
            car.accessories.map(acessory => (
              <Accessory
              type={acessory.type}
              name={acessory.name}
              icon={SpeedSvg} />
            ))
          }
        </Acessories>

        <About>
          { car.about }
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aliguel" onPress={handleConfirmRental} />
      </Footer>

    </Container>
  )
}
