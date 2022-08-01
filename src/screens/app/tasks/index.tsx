import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import CreatePersonModal from '../../../components/organisms/CreatePersonModal';
import Header from '../../../components/organisms/Header';
import ListTasks from '../../../components/organisms/ListTasks';
import PersonSelectModal from '../../../components/organisms/PersonSelectModal';
import { useAppContext } from '../../../contexts/app/context';
import { useAuthContext } from '../../../contexts/auth/context';
import { GRAY_DARK, GRAY_MEDIUM, PRIMARY } from '../../../styles/colors';
import { Container } from '../../../styles/container';
import { Text18, Text16, StyledText } from '../../../styles/text';
import { AddTaskButton, ButtonArea, Content, ContentWithoutPerson, Divider, TitleArea, TitleContent } from './styles';

const Tasks = ({ navigation }: any) => {
  const [showModal, setShowModal] = useState(false);
  const {
    persons,
    personSelected,
    showPersonSelectModal,
    setShowPersonSelectModal,
  } = useAppContext();

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Container>
      {
        !persons.length || !personSelected ?
          <ContentWithoutPerson>
            <Text18 style={{ color: '#6d6d6d' }}>Nenhum perfil encontrado</Text18>
            <TouchableOpacity
              style={{ marginTop: 6 }}
              onPress={toggleModal}
            >
              <Text16 style={{ color: PRIMARY, }}>Criar um perfil</Text16>
            </TouchableOpacity>
            <CreatePersonModal
              isVisible={showModal}
              onBackdropPress={toggleModal}
            />
          </ContentWithoutPerson>
          :
          <>
            <Header />
            <Content>
              <TitleArea>
                <View>
                  <Divider />
                </View>
                <TitleContent>
                  <StyledText
                    bolded
                    size={28}
                    color={GRAY_DARK}
                  >
                    Lista
                  </StyledText>
                  <StyledText
                    size={32}
                    color={GRAY_MEDIUM}
                  >
                    {''} de Tarefas
                  </StyledText>
                </TitleContent>
                <View>
                  <Divider />
                </View>
              </TitleArea>
              <ButtonArea>
                <AddTaskButton onPress={() => navigation.navigate('AddTask')} >
                  <Ionicons name='add-outline' size={32} color={GRAY_DARK} />
                </AddTaskButton>
                <StyledText
                  size={18}
                  color={GRAY_MEDIUM}
                  style={{ marginTop: 12 }}
                >Adicionar tarefa</StyledText>
              </ButtonArea>
              <ListTasks />
            </Content>
          </>
      }
      <PersonSelectModal
        isVisible={showPersonSelectModal}
        onBackdropPress={
          !personSelected ?
          () => {}
          :
          () => setShowPersonSelectModal(!showPersonSelectModal)
        }
      />
    </Container>
  )
}

export default Tasks;
