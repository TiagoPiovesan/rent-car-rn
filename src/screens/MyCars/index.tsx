import { useState, useEffect } from "react"
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
import Car from "../../components/Car"
import Load from "../../components/Load"
import { Car as CarModel } from '../../database/model/Car';
import { format, parseISO } from "date-fns"
import { useIsFocused } from "@react-navigation/native"

interface DataProps {
  id: string;
  car: CarModel;
  start_date: string;
  end_date: string;
}

export function MyCars() {
  const [cars, setCars] = useState<DataProps[]>([])
  const [loading, setLoading] = useState(true)
  const screenIsFocus = useIsFocused()

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('rentals');
        const dataFormated = response.data.map((item: DataProps) => {
          return {
            id: item.id,
            car: item.car,
            start_date: format(parseISO(item.start_date), "dd/MM/yyyy"),
            end_date: format(parseISO(item.end_date), "dd/MM/yyyy")
          }
        })
        setCars(dataFormated);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [screenIsFocus])

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
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
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <ArrowIcon />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
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
