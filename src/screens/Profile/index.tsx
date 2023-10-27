import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';
import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section
} from './styles';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Input from '../../components/Input';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import PasswordInput from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';

export function Profile() {
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')
  const theme = useTheme()
  const navigation = useNavigation()
  const { user } = useAuth()

  function handleBack() {
    navigation.goBack()
  }

  function handleSignOut() {

  }

  function handleChangeForm(selected: 'dataEdit' | 'passwordEdit') {
    setOption(selected);
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior='position'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo source={{ uri: "https://avatars.githubusercontent.com/u/20112017?v=4" }} />
              <PhotoButton onPress={() => { }} >
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option
                active={option === 'dataEdit'}
                onPress={() => handleChangeForm('dataEdit')}
              >
                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>
              <Option
                active={option === 'passwordEdit'}
                onPress={() =>handleChangeForm('passwordEdit')}
              >
                <OptionTitle active={option === 'passwordEdit'}>Trocar senha</OptionTitle>
              </Option>
            </Options>

            { option === 'dataEdit' ?
              <Section>
                <Input
                  iconName='user'
                  placeholder='Nome'
                  autoCorrect={false}
                  defaultValue={user.name}
                />
                <Input
                  iconName='mail'
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName='credit-card'
                  placeholder='CNH'
                  keyboardType='numeric'
                  defaultValue={user.driver_license}
                />
              </Section>
            :
              <Section>
                <PasswordInput
                  iconName='lock'
                  placeholder='Senha atual'
                />
                <PasswordInput
                  iconName='lock'
                  placeholder='Nova Senha'
                />
                <PasswordInput
                  iconName='lock'
                  placeholder='Repetir Senha'
                />

              </Section>
            }

          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  )
}
