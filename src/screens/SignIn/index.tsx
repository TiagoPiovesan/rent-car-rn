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
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useState } from 'react'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';


export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')
  const navigation = useNavigation()
  const { signIn } = useAuth()

  async function handleSignIn() {
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("E-mail inválido"),
        password: Yup.string()
          .required("E-password obrigatório")
      })

      await schema.validate({ email, password })

      signIn({ email, password })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message)
      } else {
        Alert.alert("Error na autenticação", "Ocorreu um erro ao fazer login, verifique as credenciais")
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep")
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            onChangeText={setEmail}
            value={email}
          />
          <PasswordInput
            iconName='lock'
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={setPassowrd}
            value={password}
          />
        </Form>

        <Footer>
          <Button
            title='Login'
            onPress={handleSignIn}
            enabled={true}
            loading={false}
          />
          <Button
            title='Criar conta gratuíta'
            color={theme.colors.background_secondary}
            onPress={handleNewAccount}
            enabled={true}
            loading={false}
            light
          />
        </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
