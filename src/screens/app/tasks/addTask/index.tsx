import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import DefaultInput from '../../../../components/atoms/Inputs/DefaultInput';
import { useAuthContext } from '../../../../contexts/auth/context';
import TaskService from '../../../../services/TaskService';
import { GRAY_DARK, PRIMARY } from '../../../../styles/colors';
import { Container } from '../../../../styles/container';
import { StyledText } from '../../../../styles/text';
import { FormArea, TitleArea } from './styles';

const AddTask = ({ navigation }: any) => {
  const { currentUser } = useAuthContext();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    TaskService.create({ name, description }, currentUser?.uid || '')
      .then(() => navigation.goBack());
  }

  return (
    <Container>
      <TitleArea>
        <StyledText
          size={32}
          color={GRAY_DARK}
          bolded
        >Adicionar</StyledText>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='close-outline' size={36} />
        </TouchableOpacity>
      </TitleArea>

      <FormArea>
        <DefaultInput
          placeholder='Título'
          onChangeText={setName}
        />
        <DefaultInput
          spaceTop
          placeholder='Descrição'
          onChangeText={setDescription}
          multiline
          numberOfLines = {10}
          textArea
        />
        <Button
          icon={{ name: 'check', color: '#fff' }}
          containerStyle={{ marginTop: 20, }}
          buttonStyle={{ backgroundColor: PRIMARY, borderRadius: 6, width: 50 }}
          onPress={handleCreateTask}
          disabled={!name}
        />
      </FormArea>
    </Container>
  )
}

export default AddTask
