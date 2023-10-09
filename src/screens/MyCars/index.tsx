import { useState, useEffect } from "react"
import { CarDTO } from "../../dtos/CarDTO"
import { api } from "../../services/api"
import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentTitle,
  AppointmentQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  ArrowIcon
} from "./styles"
import { FlatList, StatusBar } from "react-native"
import BackButton from "../../components/BackButton"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "styled-components"
import Car from "../../components/Car"
import Load from "../../components/Load"

interface CarProps {
  id: string,
  user_id: string,
  car: CarDTO,
  startDate: string,
  endDate: string,
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        {/* <BackButton onPress={() => {navigation.goBack()}} color={ theme.colors.shape } /> */}
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <SubTitle>
          Conforto,
          segurança e
          praticidade
        </SubTitle>
      </Header>

      {loading ?
        <Load /> :
        <Content>
          <Appointments>
            <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
            <AppointmentQuantity>{ cars.length }</AppointmentQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <ArrowIcon />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>

                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      }
    </Container>
  )
}
