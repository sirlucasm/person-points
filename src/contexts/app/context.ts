import { View, Text } from 'react-native'
import { createContext, useContext } from 'react';
import { IPerson } from '../../@types/person';
import { DocumentData } from 'firebase/firestore';

export interface AppContextProps {
  tasks: any[];
  persons: any[];
  personSelected: IPerson | null;
  setPersonSelected: React.Dispatch<React.SetStateAction<any>>;
  showPersonSelectModal: boolean;
  setShowPersonSelectModal: React.Dispatch<React.SetStateAction<boolean>>;
  handlePersonSelectModal: (person: any) => void;
};

export const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);
