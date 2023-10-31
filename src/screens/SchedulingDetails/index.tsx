import Acessory from '../../components/Accessory';
import BackButton from '../../components/BackButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
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
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  Acessories,
  Footer,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuote,
  RentalPriceTotal,
} from './styles';

import { getAcessotyIcon } from '../../utils/getAcessotyIcon'
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { useEffect, useState } from 'react';
import { getPlatformDate } from '../../utils/getPlataformDate';
import { format } from 'date-fns';
import { api } from '../../services/api';
import { Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false)
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const netInfo = useNetInfo()
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { car, dates } = route.params as Params

  const rentTotal = Number(dates.length * car.price)

  async function handleConfirmRental() {
    setLoading(true)

    await api.post('rentals', {
      user_id: 1,
      car_id: car.id,
      start_date: new Date(dates[0]),
      end_date: new Date(dates[dates.length - 1]),
      total: rentTotal
    }).then(() => {
      navigation.navigate('Confirmation', {
        title: "Carro alugado!",
        message: `Agora você só precisa ir \naté uma concessionária da RENTX \npegar o seu automóvel`,
        nextScreenRoute: "Home"
      })
    }).catch((error) => {
      console.log(error)
      setLoading(false)
      Alert.alert("Não foi possível concluir o agendamento")
    })
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

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate( new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate( new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { navigation.goBack() }} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={!!carUpdated.photos ? carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{ car.brand }</Brand>
            <Name>{ car.name }</Name>
          </Description>
          <Rent>
            <Period>{ car.period }</Period>
            <Price>R$ { car.price }</Price>
          </Rent>
        </Details>

        { !!carUpdated.accessories &&
          <Acessories>
            {
            carUpdated.accessories.map(acessory => (
              <Acessory
                key={acessory.type}
                name={acessory.name}
                icon={getAcessotyIcon(acessory.type)}
              />
            ))
          }
          </Acessories>
        }
        <RentalPeriod>
          <CalendarIcon>
            <Feather
                name='calendar'
                size={RFValue(24)}
                color={theme.colors.shape}
              />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{ rentalPeriod.start }</DateValue>
          </DateInfo>

          <Feather
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuote>{`R$ ${car.price} x${dates.length} diárias`}</RentalPriceQuote>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          enabled={!loading}
          loading={loading}
          color={theme.colors.success}
          onPress={handleConfirmRental} />
      </Footer>

    </Container>
  )
}
