import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradientLoginBackground } from '../../../styles/container';
import { FormArea, FormAreaContent } from './styles';
import AuthInput from '../../../components/atoms/Inputs/AuthInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import { PRIMARY, WHITE } from '../../../styles/colors';
import { Text14 } from '../../../styles/text';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useAuthContext } from '../../../contexts/auth/context';
import { useState } from 'react';
import AppLoading from '../../../components/organisms/AppLoading';

interface LoginScreenProps {
  navigation: StackNavigationProp<any, 'Login'>;
  routes: RouteProp<any, 'Login'>
};

const Login = ({ navigation, }: LoginScreenProps) => {
  const { login, authenticating } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateValues = () => {
    if (email.trim() && password.trim()) return true;
    return false;
  }

  const submit = () => {
    login({ email, password });
  }

  return (
    <LinearGradientLoginBackground
      colors={['#2a5298', '#172b4e', ]}
    >
      <Image
        source={require('../../../assets/images/icon.png')}
        style={{ height: 128, width: 128, borderRadius: 30 }}
      />
      <FormArea>
        <FormAreaContent>
          <AuthInput
            placeholder='Email'
            inputContainerStyle={{ borderBottomWidth: 0, }}
            leftIcon={<Ionicons name='mail-outline' size={18} color='#3d3d3d' />}
            returnKeyType='next'
            onChangeText={setEmail}
          />
        </FormAreaContent>
        <FormAreaContent>
          <AuthInput
            placeholder='Senha'
            inputContainerStyle={{ borderBottomWidth: 0, }}
            leftIcon={<Ionicons name='lock-closed-outline' size={18} color='#3d3d3d' />}
            secureTextEntry
            returnKeyType='go'
            onChangeText={setPassword}
            onSubmitEditing={submit}
          />
        </FormAreaContent>
        <FormAreaContent style={{ alignSelf: 'flex-end' }}>
          <TouchableOpacity>
            <Text14 style={{ color: WHITE }}>Esqueci minha senha</Text14>
          </TouchableOpacity>
        </FormAreaContent>
        <FormAreaContent>
          <Button
            title='Entrar'
            containerStyle={{ marginVertical: 10, }}
            buttonStyle={{ backgroundColor: PRIMARY, borderRadius: 50 }}
            onPress={submit}
            disabled={!validateValues()}
          />
          <Button
            title='Criar conta'
            buttonStyle={{ backgroundColor: WHITE, borderRadius: 50 }}
            titleStyle={{ color: '#3d3d3d' }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </FormAreaContent>
      </FormArea>
      { authenticating && <AppLoading bgColor='rgba(0, 0, 0, .5)' /> }
    </LinearGradientLoginBackground>
  )
}

export default Login;
