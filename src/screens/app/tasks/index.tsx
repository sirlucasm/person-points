import { View, Alert, Button } from 'react-native'

const Tasks = ({ navigation }: any) => {
  return (
    <View style={{ marginTop: 30 }}>
      <Button title='Go to Login' onPress={() => Alert.alert('a')} />
    </View>
  )
}

export default Tasks;
