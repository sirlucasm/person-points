import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';
import { ISubTask } from '../../@types/task';
import TaskService from '../../services/TaskService';
import { WHITE } from '../../styles/colors';
import { StyledText } from '../../styles/text';

const { width } = Dimensions.get('window');

const Item = styled.TouchableOpacity<any>`
  width: ${width * 0.535}px;
  height: ${normalize(242, 'height')}px;
  background-color: ${props => props.color};
  border-radius: 6px;
  margin-horizontal: 10px;
  ${props => props.index == 0 && 'margin-left: 40px;'}
  ${props => props.index+1 == props.totalTasks && 'margin-right: 40px;'}
`;

const TitleArea = styled.View`
  margin-left: 30px;
  margin-top: 60px;
`;

export const Divider = styled.View`
  border-bottom-color: #cdcdcd;
  border-bottom-width: 0.8px;
  width: 100%;
  margin-vertical: 20px;
`;

export const SubTasksList = styled.View`
  margin-left: 8px;
  padding-right: 60px;
`;

export const SubTaskContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TaskItem = ({ item, index, totalTasks }: any) => {
  const [subTasks, setSubTasks] = useState<any[]>([]);

  const navigation: any = useNavigation();

  const handleOpenTask = (item: any) => {
    navigation.navigate('ShowTask', { task: item });
  }

  useEffect(() => {
    const unsub = TaskService.listSubTasks(setSubTasks, item.id);
    return unsub;
  });

  return (
    <Item
      activeOpacity={0.88}
      index={index}
      color={item.color}
      totalTasks={totalTasks}
      onPress={() => handleOpenTask(item)}
    >
      <TitleArea>
        <StyledText
          color={WHITE}
          size={20}
          bolded
        >{item.name}</StyledText>
        <Divider />
      </TitleArea>
      <SubTasksList>
        {
          subTasks.map((subTask: ISubTask, index: number) => index < 4 && (
            <SubTaskContent key={index}>
              <CheckBox
                checked={subTask.done}
                checkedColor={WHITE}
                uncheckedColor={WHITE}
                activeOpacity={1}
                containerStyle={{ margin: 0, marginRight: -5, }}
                size={14}
              />
              <StyledText
                size={14}
                color={WHITE}
                style={subTask.done && {
                  textDecorationStyle: 'solid',
                  textDecorationLine: 'line-through'
                }}
              >
                {subTask.name}
              </StyledText>
            </SubTaskContent>
          ))
        }
      </SubTasksList>
    </Item>
  )
}

export default TaskItem
