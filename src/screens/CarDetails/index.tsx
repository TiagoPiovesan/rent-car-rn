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


import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { Car as CarModel } from '../../database/model/Car';
import { getAcessotyIcon } from '../../utils/getAcessotyIcon';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNetInfo } from '@react-native-community/netinfo';
import OfflineInfo from '../../components/OfflineInfo';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
  const navigation = useNavigation()
  const route = useRoute()
  const netInfo = useNetInfo()
  const { car } = route.params as Params

  function handleConfirmRental(){
    navigation.navigate('Scheduling', { car })
  }

  useEffect(() => {
    async function feachCarUpdated() {
      const response = await api.get(`/cars/${car.id}`)
      setCarUpdated(response.data)
    }

    if (netInfo.isConnected === true) {
      feachCarUpdated()
    }
  }, [netInfo.isConnected])

  return (
    <Container>
      {
        netInfo.isConnected === false &&
        <OfflineInfo />
      }
      <Header>
        <BackButton onPress={() => {navigation.goBack()}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={
          !!carUpdated.photos ? carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
        } />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{ car.brand }</Brand>
            <Name>{ car.name }</Name>
          </Description>
          <Rent>
            <Period>{ car.period }</Period>
            <Price> R$
              {
                netInfo.isConnected === true ? car.price : "..."
              }
            </Price>
          </Rent>
        </Details>

        { !!carUpdated.accessories &&
          <Acessories>
          {
            carUpdated.accessories.map(acessory => (
              <Accessory
                key={acessory.type}
                name={acessory.name}
                icon={getAcessotyIcon(acessory.type)} />
            ))
          }
        </Acessories>
        }

        <About>
          { car.about }
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
          enabled={netInfo.isConnected === true}
        />

      </Footer>

    </Container>
  )
}
