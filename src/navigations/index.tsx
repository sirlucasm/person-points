import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../contexts/auth/context";
import { AuthStackScreen, RootStackScreen } from "./stack";

const Navigation = () => {
  const { signed } = useAuthContext();
  return (
    <NavigationContainer>
      {
        signed ? <RootStackScreen /> : <AuthStackScreen />
      }
    </NavigationContainer>
  )
}

export default Navigation;
