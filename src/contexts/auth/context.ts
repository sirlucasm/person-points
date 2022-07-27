import { createContext, useContext } from 'react';

export interface AuthContextProps {
  signed: boolean;
};

export const AuthContext = createContext({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);
