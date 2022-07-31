import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/app/profile';
import Tasks from '../screens/app/tasks';
import AddTask from '../screens/app/tasks/addTask';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import { AppTab } from './tab';

const RootStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const TaskStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='TabStack'
    >
      <RootStack.Screen name="TabStack" component={AppTab} />
      <RootStack.Screen name="TaskStack" component={TaskStackScreen} />
      <RootStack.Screen name="ProfileStack" component={ProfileStackScreen} />
    </RootStack.Navigator>
  )
}

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <TaskStack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          presentation: 'modal',
        }}
      />
    </TaskStack.Navigator>
  )
}
const ProfileStackScreen = () => {
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
