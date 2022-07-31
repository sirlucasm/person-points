import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabContent from '../components/organisms/BottomTabContent';
import Profile from '../screens/app/profile';
import Tasks from '../screens/app/tasks';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      initialRouteName='TasksTab'
      tabBar={props => <BottomTabContent {...props} />}
    >
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
