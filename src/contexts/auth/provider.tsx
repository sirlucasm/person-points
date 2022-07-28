import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged, User } from "firebase/auth";
import { ProviderProps, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { CreateUserParams } from "../../@types/user";
import { auth } from "../../configs/firebase";
import UserService from "../../services/UserService";
import { AuthContext, AuthContextProps } from "./context";

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authenticating, setAuthenticating] = useState(false);

  const login = ({ email, password }: CreateUserParams) => {
    setAuthenticating(true);

    UserService.login({ email, password })
      .then((data) => setCurrentUser(data.user))
      .catch(error => Alert.alert(error.message))
      .finally(() => setAuthenticating(false));
  }

  const signUp = (params: CreateUserParams) => {
    setAuthenticating(true);

    UserService.create(params)
      .then((data) => setCurrentUser(data.user))
      .catch(error => Alert.alert(error.message))
      .finally(() => setAuthenticating(false));
  }

  const logout = () => UserService.logout().then(() => setCurrentUser(null));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userLogged) => {
      const userData = await AsyncStorage.getItem('auth_user_data');

      if (!userLogged) {
        if (userData?.length) {
          const data = JSON.parse(userData);
          login(data);
        }
      } else {
        setAuthenticating(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setAuthenticating(false);
        setCurrentUser(userLogged);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{
      signed: !!currentUser,
      login,
      signUp,
      logout,
      authenticating,
      setAuthenticating
    }}>
      { children }
    </AuthContext.Provider>
  );
}
