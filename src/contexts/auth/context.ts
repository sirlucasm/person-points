import { createContext, useContext } from 'react';
import { CreateUserParams } from '../../@types/user';

export interface AuthContextProps {
  signed: boolean;
  login: ({ email, password }: CreateUserParams) => void;
  signUp: (params: CreateUserParams) => void;
  logout: () => void;
  authenticating: boolean;
  setAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);
