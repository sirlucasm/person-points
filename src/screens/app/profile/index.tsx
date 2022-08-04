import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ProfileHeader from '../../../components/organisms/ProfileHeader'
import TaskService from '../../../services/TaskService'
import { GRAY_DARK, GRAY_MEDIUM, WHITE } from '../../../styles/colors'
import { Container } from '../../../styles/container'
import { StyledText } from '../../../styles/text';
import { formatDateString } from '../../../utils/app'
import { ContentArea, TasksContent, TitleArea } from './styles'

const Profile = ({ navigation }: any) => {
  const [doneTasks, setDoneTasks] = useState<any[]>([]);

  const handleOpenTask = (item: any) => {
    navigation.navigate('ShowTask', { task: item });
  }

  useEffect(() => {
    const unsub = TaskService.listDoneTasks(setDoneTasks);

    return unsub;
  }, []);

  return (
    <Container style={{ paddingTop: 0 }} >
      <ProfileHeader />
      <View style={{ marginTop: 120, }}>
        <StyledText
          size={24}
          color={GRAY_DARK}
          style={{ alignSelf: 'center', marginBottom: 20 }}
        >
          Tarefas finalizadas
        </StyledText>
        <FlatList
          data={doneTasks}
          keyExtractor={(item) => item.id}
          style={{ marginHorizontal: 25 }}
          renderItem={
            ({ item }) => (
              <TasksContent
                activeOpacity={0.88}
                onPress={() => handleOpenTask(item)}
                color={item?.color}
              >
                <TitleArea>
                  <StyledText
                    size={16}
                    color={WHITE}
                  >
                    {item?.name}
                  </StyledText>
                </TitleArea>
                <ContentArea>
                  <StyledText
                    size={14}
                    color={GRAY_MEDIUM}
                  >
                    {formatDateString(item?.updatedAt)}
                  </StyledText>
                </ContentArea>
              </TasksContent>
            )
          }
        />
      </View>
    </Container>
  )
}

export default Profile
