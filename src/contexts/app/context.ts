import { View, Text } from 'react-native'
import { createContext, useContext } from 'react';

export interface AppContextProps {
  tasks: [];
};

export const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);
