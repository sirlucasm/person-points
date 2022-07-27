import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileStackScreen, TaskStackScreen } from './stack';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='TasksTab'
    >
      <Tab.Screen name="TasksTab" component={TaskStackScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
