import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../contexts/auth/context";
import { AuthStackScreen } from "./stack";
import { AppTab } from "./tab";

const Navigation = () => {
  const { signed } = useAuthContext();
  return (
    <NavigationContainer>
      {
        signed ? <AppTab /> : <AuthStackScreen />
      }
    </NavigationContainer>
  )
}

export default Navigation;
