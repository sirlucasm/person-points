import { View, Text, FlatList, Dimensions } from 'react-native';
import { useAppContext } from '../../contexts/app/context';
import TaskItem from '../molecules/TaskItem';

const ListTasks = () => {
  const { tasks } = useAppContext();
  const { width } = Dimensions.get('window');

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={
        ({ item, index }) => <TaskItem
          item={item}
          index={index}
          totalTasks={tasks.length}
        />
      }
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(tasks.length).map((_, i) => i * (width * 0.555 - 20) + (i-1)  * 20)]}
      snapToAlignment='start'
      scrollEventThrottle={16}
      decelerationRate='fast'
    />
  )
}

export default ListTasks
