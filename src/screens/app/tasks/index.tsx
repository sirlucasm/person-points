import { View, Alert, Button } from 'react-native'
import { useAuthContext } from '../../../contexts/auth/context';

const Tasks = ({ navigation }: any) => {
  const { logout } = useAuthContext();
  return (
    <View style={{ marginTop: 30 }}>
      <Button title='sair' onPress={logout} />
    </View>
  )
}

export default Tasks;
