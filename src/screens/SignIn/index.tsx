import { StatusBar } from 'expo-status-bar';
import {
  Container,
  Header,
  Title,
  Form,
  SubTitle,
  Footer
} from './styles';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';


export function SignIn() {
  return (
    <Container>
      <StatusBar
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <Title>
          Estamos {"\n"}
          quase lá.
        </Title>
        <SubTitle>
          Faça seu login para começar {"\n"}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName='mail'
          placeholder='E-mail'
          autoCorrect={false}
          keyboardType='email-address'
          autoCapitalize="none"
        />
        <PasswordInput
          iconName='lock'
          placeholder='Senha'
          autoCorrect={false}
        />
      </Form>

      <Footer>
        <Button
          title='Login'
          onPress={() => { }}
          enabled={false}
          loading={false}
        />
        <Button
          title='Criar conta gratuíta'
          color={theme.colors.background_secondary}
          onPress={() => { }}
          enabled={false}
          loading={false}
          light
        />
      </Footer>
    </Container>
  )
}
