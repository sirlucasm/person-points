import { NavigationContainer } from "@react-navigation/native";
import { AuthStackScreen } from "./stack";
import { AppTab } from "./tab";

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AppTab /> */}
      <AuthStackScreen />
    </NavigationContainer>
  )
}

export default Navigation;
