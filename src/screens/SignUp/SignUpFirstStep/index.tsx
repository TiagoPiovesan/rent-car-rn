import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/BackButton';
import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles';
import Bullet from '../../../components/Bullet';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import * as Yup from 'yup'

export function SignUpFirstStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  async function handleFinishFirstStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH obrigatório'),
        email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
        name: Yup.string().required('Nome obrigatório'),
      })

      const data = { name, email, driverLicense }

      await schema.validate(data)

      navigation.navigate('SignUpSecondStep', { user: data })

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message)
      }
    }
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
              <FormTitle>1. Dados</FormTitle>
              <Input iconName="user" placeholder="Nome" onChangeText={setName} value={name} />
              <Input iconName="mail" inputMode='email' placeholder="E-mail" onChangeText={setEmail} value={email} autoCapitalize={"none"} />
              <Input iconName="credit-card" keyboardType='numeric' placeholder="CNH" onChangeText={setDriverLicense} value={driverLicense} />
            </Form>

            <Button title="Próximo" onPress={handleFinishFirstStep} />

          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
