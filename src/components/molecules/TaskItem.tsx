import { View, Text, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';
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
`;

const TaskItem = ({ item, index, totalTasks }: any) => {
  return (
    <Item activeOpacity={0.88} index={index} color={item.color} totalTasks={totalTasks}>
      <TitleArea>
        <StyledText
          color={WHITE}
          size={20}
          bolded
          style={{ marginBottom: 20 }}
        >{item.name}</StyledText>
        <Divider />
      </TitleArea>
    </Item>
  )
}

export default TaskItem
