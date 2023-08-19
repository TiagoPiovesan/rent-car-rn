import {
  Container,
  Content,
  Title,
  Message,
  Footer
 } from './styles';
import { StatusBar, useWindowDimensions } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import ConfirmButton from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const navigation = useNavigation()
  const { width } = useWindowDimensions()

  function handleConfirm() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor='trasparent'
      />
      <LogoSvg width={ width } />

      <Content>
        <DoneSvg width={ 80 } height={ 80 } />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até uma concessionária da RENTX {'\n'}
          pegar o seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title={"Ok"} onPress={handleConfirm}/>
      </Footer>
    </Container>
  )
}
