import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/app/profile';
import AddTask from '../screens/app/tasks/addTask';
import ShowTask from '../screens/app/tasks/showTask';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import { AppTab } from './tab';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='TabStack'
    >
      {/* ROOT TAB */}
      <RootStack.Screen name="TabStack" component={AppTab} />

      {/* TASK */}
      <RootStack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          presentation: 'modal',
        }}
      />
      <RootStack.Screen
        name="ShowTask"
        component={ShowTask}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      {/* PROFILE */}
      <RootStack.Screen name="Profile" component={Profile} />
    </RootStack.Navigator>
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
