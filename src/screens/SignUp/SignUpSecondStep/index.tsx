import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../../../components/BackButton';
import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles';
import Bullet from '../../../components/Bullet';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PasswordInput from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { Confirmation } from '../../Confirmation';
import { api } from '../../../services/api';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep() {
  const theme = useTheme()
  const route = useRoute()
  const navigation = useNavigation()
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')

  const { user } = route.params as Params

  function handleBack() {
    navigation.goBack()
  }

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Preencha os campos senha e confirmação")
    }

    if (password != passwordConfirm) {
      return Alert.alert("As senhas não são iguais")
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: "SignIn",
        title: "Conta Criada!",
        message: `Agora é só fazer o login\ne aproveitar`
      })
    })
    .catch((error) => {
      Alert.alert(`Não foi possível criar sua conta ${error.message}`)
    })
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView mode="margin" edges={["top"]} >
          <Container>
            <Header>
              <BackButton onPress={handleBack} />
              <Steps>
                <Bullet active />
                <Bullet />
              </Steps>
            </Header>

            <Title>
              Crie sua {"\n"}
              Conta
            </Title>
            <SubTitle>
              Faça seu cadastro de {"\n"}
              forma rápida e fácil
            </SubTitle>

            <Form>
              <FormTitle>2. Senha</FormTitle>
              <PasswordInput iconName='lock' placeholder='Senha' secureTextEntry onChangeText={setPassword} value={password} />
              <PasswordInput iconName='lock' placeholder='Confirme a senha' secureTextEntry onChangeText={setPasswordConfirm} value={passwordConfirm} />
            </Form>

            <Button title="Cadastrar" color={ theme.colors.success } onPress={handleRegister} />

          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
