import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradientLoginBackground } from '../../../styles/container';
import { FormArea, FormAreaContent } from '../login/styles';
import AuthInput from '../../../components/atoms/Inputs/AuthInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import { PRIMARY, WHITE } from '../../../styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useAuthContext } from '../../../contexts/auth/context';
import { useState } from 'react';
import AppLoading from '../../../components/organisms/AppLoading';

interface SignUpScreenProps {
  navigation: StackNavigationProp<any, 'SignUp'>;
  routes: RouteProp<any, 'SignUp'>
};

const SignUp = ({ navigation, }: SignUpScreenProps) => {
  const { signUp, authenticating } = useAuthContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateValues = () => {
    if (
      name.trim() &&
      email.trim() &&
      password.trim()
    ) return true;
    return false;
  }

  const submit = () => {
    signUp({ name, email, password });
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
            placeholder='Nome'
            inputContainerStyle={{ borderBottomWidth: 0, }}
            leftIcon={<Ionicons name='person-outline' size={18} color='#3d3d3d' />}
            returnKeyType='next'
            onChangeText={setName}
          />
        </FormAreaContent>
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
        <FormAreaContent>
          <Button
            title='Cadastrar'
            containerStyle={{ marginVertical: 10, }}
            buttonStyle={{ backgroundColor: PRIMARY, borderRadius: 50 }}
            onPress={submit}
            disabled={!validateValues()}
          />
          <Button
            title='Voltar'
            buttonStyle={{ backgroundColor: WHITE, borderRadius: 50 }}
            titleStyle={{ color: '#3d3d3d' }}
            onPress={() => navigation.popToTop()}
          />
        </FormAreaContent>
      </FormArea>
      { authenticating && <AppLoading bgColor='rgba(0, 0, 0, .5)' /> }
    </LinearGradientLoginBackground>
  )
}

export default SignUp;
