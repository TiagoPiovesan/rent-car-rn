import Acessory from '../../components/Acessory';
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

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2022/audi/rs-7-sportback/base-rs-7-sportback/sedan/exteriorColors/2022_audi_rs-7-sportback_base_001_t3t3.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>BMW</Brand>
            <Name>320i</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 300</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelerationSvg} />
          <Acessory name="800hp" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="4 pessoas" icon={PeopleSvg} />
        </Acessories>

        <About>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>

    </Container>
  )
}
