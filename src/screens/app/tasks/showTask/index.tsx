import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, ScrollView, Alert } from 'react-native';
import { ISubTask, ITask } from '../../../../@types/task';
import { ALERT, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, WHITE } from '../../../../styles/colors';
import { Container } from '../../../../styles/container';
import { StyledText } from '../../../../styles/text';
import { taskDoneTitleFormating, taskFinishedPercent } from '../../../../utils/task';
import { ButtonContent, CreateSubTaskBtn, DeleteTaskButton, Divider, SubTasksList, TitleAndProgress, TitleArea, TitleTaskRow } from './styles';
import { Modalize } from 'react-native-modalize';
import { useEffect, useRef, useState } from 'react';
import CreateSubTask from '../../../../components/organisms/CreateSubTask';
import TaskService from '../../../../services/TaskService';
import { formatDateString } from '../../../../utils/app';
import { CheckBox } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface ShowTaskProps {
  navigation: StackNavigationProp<any, 'ShowTask'>;
  route: RouteProp<any, 'ShowTask'>
};

const ShowTask = ({ route, navigation }: ShowTaskProps) => {
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

  const handleFinishSubTask = async (subTaskId: string, doneStatus: boolean) => {
    await TaskService.finishSubTask({
      done: !doneStatus,
      subTaskId,
    }, task?.id || '');
  }

  const deleteTask = async () => {
    await TaskService.deleteTask(task?.id || '');
    navigation.goBack();
  }

  const handleDeleteTask = async () => {
    Alert.alert('Excluir Tarefa', 'Deseja mesmo escluir esta tarefa?', [
      { text: 'cancelar' },
      { text: 'sim', onPress: () => deleteTask() }
    ], { cancelable: false });
  }

  useEffect(() => {
    const unsubTask = TaskService.showTask(setTask, taskClicked.id);
    const unsubSubTasks = TaskService.listSubTasks(setSubTasks, taskClicked.id);

    return () => {
      unsubTask();
      unsubSubTasks();
    };
  }, []);

  return (
    <Container>
      <TitleArea>
        <TitleTaskRow>
          <TitleAndProgress>
            <AnimatedCircularProgress
              size={22}
              width={3}
              fill={taskFinishedPercent(subTasks.filter(s => s.done).length, subTasks.length)}
              tintColor={task?.color}
              backgroundColor={GRAY_LIGHT}
              rotation={0}
            />
            <StyledText
              bolded
              size={28}
              color={GRAY_DARK}
              style={{ marginLeft: 12 }}
            >
              {task?.name}
            </StyledText>
          </TitleAndProgress>
          <DeleteTaskButton
            onPress={() => handleDeleteTask()}
            activeOpacity={0.8}
          >
            <Ionicons name='trash' size={20} color={ALERT} />
          </DeleteTaskButton>
        </TitleTaskRow>
        {
          !!task?.description &&
            <StyledText
              size={16}
              color={GRAY_MEDIUM}
            >
              {task.description}
            </StyledText>
        }
        <StyledText
          size={17}
          color={GRAY_MEDIUM}
          style={{ marginTop: 10 }}
        >
          {taskDoneTitleFormating(subTasks, subTasks.length)}
        </StyledText>
        <Divider />
      </TitleArea>

      <ScrollView style={{ paddingLeft: 30, }}>
        {
          subTasks?.map((subTask: ISubTask, index: number) => (
            <SubTasksList key={index}>
              <CheckBox
                checked={subTask.done}
                checkedColor={task?.color}
                onPress={() => handleFinishSubTask(subTask.id, subTask.done)}
              />
              <View>
                <StyledText
                  size={21}
                  color={GRAY_DARK}
                >
                  {subTask.name}
                </StyledText>
                <StyledText
                  size={14}
                  color={GRAY_MEDIUM}
                >
                  {formatDateString(subTask.deadLine)}
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
        keyboardAvoidingBehavior="height"
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
