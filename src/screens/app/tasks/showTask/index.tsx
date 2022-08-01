import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, ScrollView } from 'react-native';
import { ISubTask, ITask } from '../../../../@types/task';
import { GRAY_DARK, GRAY_MEDIUM, WHITE } from '../../../../styles/colors';
import { Container } from '../../../../styles/container';
import { StyledText } from '../../../../styles/text';
import { taskDoneTitleFormating } from '../../../../utils/task';
import { ButtonContent, CreateSubTaskBtn, Divider, SubTasksList, TitleArea } from './styles';
import { Modalize } from 'react-native-modalize';
import { useEffect, useRef, useState } from 'react';
import CreateSubTask from '../../../../components/organisms/CreateSubTask';
import TaskService from '../../../../services/TaskService';
import { formatDateString } from '../../../../utils/app';
import { CheckBox } from 'react-native-elements';

interface ShowTaskProps {
  navigation: StackNavigationProp<any, 'ShowTask'>;
  route: RouteProp<any, 'ShowTask'>
};

const ShowTask = ({ route }: ShowTaskProps) => {
  const [task, setTask] = useState<ITask | undefined>();
  const [subTasks, setSubTasks] = useState<any[]>([]);

  const taskClicked = route.params?.task;

  const modalizeRef = useRef<Modalize>(null);

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    const unsubTask = TaskService.showTask(setTask, setSubTasks, taskClicked.id);

    return unsubTask;
  }, []);

  return (
    <Container>
      <TitleArea>
        <StyledText
          bolded
          size={28}
          color={GRAY_DARK}
        >
          {task?.name}
        </StyledText>
        <StyledText
          size={17}
          color={GRAY_MEDIUM}
        >
          {taskDoneTitleFormating(subTasks, subTasks.length)}
        </StyledText>
        <Divider />
      </TitleArea>

      <ScrollView style={{ paddingLeft: 30, }}>
        {
          subTasks?.map((task: ISubTask, index: number) => (
            <SubTasksList key={index}>
              <CheckBox
              />
              <View>
                <StyledText
                  size={21}
                  color={GRAY_DARK}
                >
                  {task.name}
                </StyledText>
                <StyledText
                  size={14}
                  color={GRAY_MEDIUM}
                >
                  {formatDateString(task.deadLine)}
                </StyledText>
              </View>
            </SubTasksList>
          ))
        }
      </ScrollView>
      <ButtonContent>
        <CreateSubTaskBtn
          activeOpacity={0.9}
          onPress={openModalize}
        >
          <Ionicons name='add' size={28} color={WHITE} />
        </CreateSubTaskBtn>
      </ButtonContent>

      <Modalize
        ref={modalizeRef}
        modalHeight={380}
      >
        <CreateSubTask
          taskId={task?.id || ''}
          subTasks={subTasks}
          closeModalize={closeModalize}
        />
      </Modalize>
    </Container>
  )
}

export default ShowTask
