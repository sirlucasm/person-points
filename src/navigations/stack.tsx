import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/app/profile';
import Tasks from '../screens/app/tasks';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';

const ProfileStack = createStackNavigator();
const TaskStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <TaskStack.Screen name="Tasks" component={Tasks} />
    </TaskStack.Navigator>
  )
}
export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName='Login'
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  )
}
