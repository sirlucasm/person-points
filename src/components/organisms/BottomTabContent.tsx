import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { GRAY_DARK, PRIMARY } from '../../styles/colors';
import HomeIcon from '../../assets/icons/home.svg';
import UserIcon from '../../assets/icons/user.svg';

const Content = styled.View`
  flex-direction: row;
`;

const TabBarButton = styled.TouchableOpacity<any>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  height: 90px;
  border-width: 0.8px;
  border-color: #efefef;
  ${props => props.index == 0 && 'border-left-width: 0;'}
  ${props => props.index == 2 && 'border-right-width: 0;'}
  border-bottom-width: 0;
  position: relative;
`;

const Circle = styled.View`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: ${PRIMARY};
  bottom: 25px;
`;

const BottomTabContent = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <Content>
      {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const RouteNames: any = {
            TasksTab: <HomeIcon
              fill={isFocused ? PRIMARY : GRAY_DARK}
              width={26}
              height={26}
            />,
            ProfileTab: <UserIcon
              fill={isFocused ? PRIMARY : GRAY_DARK}
              width={24}
              height={24}
            />,
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(label, { merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabBarButton
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              index={index}
              activeOpacity={0.8}
            >
              {
                RouteNames[label]
              }
              { isFocused && <Circle /> }
            </TabBarButton>
          );
        })
      }
    </Content>
  )
}

export default BottomTabContent;
