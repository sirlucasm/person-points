import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { useAppContext } from '../../contexts/app/context';
import TaskService from '../../services/TaskService';
import { GRAY_DARK, GRAY_MEDIUM, PRIMARY } from '../../styles/colors';
import { StyledText } from '../../styles/text';
import { showDate, timeNow } from '../../utils/app';
import { generatePoints } from '../../utils/person';
import DefaultInput from '../atoms/Inputs/DefaultInput';

const { width } = Dimensions.get('window');

const Content = styled.View`
  margin-top: 40px;
  margin-left: 30px;
`;

const FormArea = styled.View`
  width: ${width * 0.7}px;
`;

const ChangeDateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const CreateSubTask = ({ subTasks, taskId, closeModalize }: {
  subTasks: any[],
  taskId: string,
  closeModalize: () => void
}) => {
  const { personSelected } = useAppContext();
  const [name, setName] = useState('');
  const [deadLine, setDeadLine] = useState<Date>(timeNow);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChangeDeadLine = (date: Date | undefined) => {
    setShowDatePicker(false);
    setDeadLine(date || timeNow);
  }

  const handleCreateSubTask = () => {
    const points = generatePoints(personSelected?.points || 0);

    TaskService.createSubTask({
      subTasks,
      newSubTask: {
        name, deadLine, points
      }
    }, taskId)
      .then(() => closeModalize());
  }

  return (
    <Content>
      <StyledText
        size={24}
        style={{ marginBottom: 25 }}
        color={GRAY_MEDIUM}
        bolded
      >
        Adicionar SubTarefa
      </StyledText>
      <FormArea>
        <DefaultInput
          placeholder='Limpar a casa, estudar história, ir à praia...'
          onChangeText={setName}
        />
        <StyledText
          size={16}
          style={{ marginTop: 16 }}
          color={GRAY_DARK}
        >
          Data para sua tarefa ser realizada:
        </StyledText>
        <StyledText
          size={24}
          style={{ marginTop: 6 }}
          color={GRAY_MEDIUM}
          bolded
        >
          { showDate(deadLine) }
        </StyledText>
        <ChangeDateButton
          onPress={() => setShowDatePicker(!showDatePicker)}
          activeOpacity={0.9}
          style={{ marginTop: 16 }}
        >
          <Ionicons name='calendar-outline' color={PRIMARY} size={22} />
          <StyledText
            size={16}
            color={PRIMARY}
            bolded
            style={{ marginLeft: 4 }}
          >
            Definir data
          </StyledText>
        </ChangeDateButton>
        <Button
          icon={{ name: 'check', color: '#fff' }}
          containerStyle={{ marginTop: 30, }}
          buttonStyle={{ backgroundColor: PRIMARY, borderRadius: 6, width: 50 }}
          onPress={handleCreateSubTask}
          disabled={!name}
        />
        {
          showDatePicker && <DateTimePicker
            value={deadLine}
            onChange={(_, date) => handleChangeDeadLine(date)}
          />
        }
      </FormArea>
    </Content>
  )
}

export default CreateSubTask
