import { User } from "firebase/auth";
import { ProviderProps, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { CreateUserParams } from "../../@types/user";
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

  const logout = async () => await UserService.logout();

  const fetchCurrentUser = useCallback(() => {
    setCurrentUser(UserService.getCurrentUser());
  }, []);

  useEffect(() => {
    fetchCurrentUser();
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
