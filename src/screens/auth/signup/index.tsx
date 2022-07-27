import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradientLoginBackground } from '../../../styles/container';
import { FormArea, FormAreaContent } from '../login/styles';
import AuthInput from '../../../components/atoms/Inputs/AuthInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import { PRIMARY, WHITE } from '../../../styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface SignUpScreenProps {
  navigation: StackNavigationProp<any, 'SignUp'>;
  routes: RouteProp<any, 'SignUp'>
};

const SignUp = ({ navigation, }: SignUpScreenProps) => {
  const submit = () => {
    console.log('signup')
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
          />
        </FormAreaContent>
        <FormAreaContent>
          <AuthInput
            placeholder='Email'
            inputContainerStyle={{ borderBottomWidth: 0, }}
            leftIcon={<Ionicons name='mail-outline' size={18} color='#3d3d3d' />}
            returnKeyType='next'
          />
        </FormAreaContent>
        <FormAreaContent>
          <AuthInput
            placeholder='Senha'
            inputContainerStyle={{ borderBottomWidth: 0, }}
            leftIcon={<Ionicons name='lock-closed-outline' size={18} color='#3d3d3d' />}
            secureTextEntry
            returnKeyType='go'
            onSubmitEditing={submit}
          />
        </FormAreaContent>
        <FormAreaContent>
          <Button
            title='Cadastrar'
            containerStyle={{ marginVertical: 10, }}
            buttonStyle={{ backgroundColor: PRIMARY, borderRadius: 50 }}
            onPress={submit}
          />
          <Button
            title='Voltar'
            buttonStyle={{ backgroundColor: WHITE, borderRadius: 50 }}
            titleStyle={{ color: '#3d3d3d' }}
            onPress={() => navigation.popToTop()}
          />
        </FormAreaContent>
      </FormArea>
    </LinearGradientLoginBackground>
  )
}

export default SignUp;
