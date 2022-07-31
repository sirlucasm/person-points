import { ProviderProps, useEffect, useState } from "react";
import { AppContext, AppContextProps } from "./context";
import Persons from '../../tmp/persons.json';
import { IPerson } from "../../@types/person";
import PersonService from "../../services/PersonService";
import { useAuthContext } from "../auth/context";
import { DocumentData } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskService from "../../services/TaskService";

export const AppProvider = ({ children }: any) => {
  const { currentUser } = useAuthContext();
  const [tasks, setTasks] = useState<any[]>([]);
  const [persons, setPersons] = useState<any[]>([]);
  const [personSelected, setPersonSelected] = useState<any>(null);
  const [showPersonSelectModal, setShowPersonSelectModal] = useState(false);

  const handlePersonSelectModal = (person: any) => {
    AsyncStorage.setItem('person_selected', JSON.stringify(person));
    setPersonSelected(person);
    setShowPersonSelectModal(false);
  }

  useEffect(() => {
    const fetchTasks = () => {

    }

    const fetchPersonSelected = async () => {
      const stored = await AsyncStorage.getItem('person_selected');

      if (stored) setPersonSelected(JSON.parse(stored));
      else setShowPersonSelectModal(true);
    }

    fetchTasks();
    fetchPersonSelected();

    return () => {
      setPersonSelected(null);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      const unsubPerson = PersonService.listAllMyPersons(setPersons, currentUser.uid);
      const unsubTask = TaskService.listAllMyTasks(setTasks, currentUser.uid);
      return () => {
        unsubPerson();
        unsubTask();
      };
    }
  }, [currentUser]);

  return (
    <AppContext.Provider value={{
      tasks,
      persons,
      personSelected,
      setPersonSelected,
      showPersonSelectModal,
      setShowPersonSelectModal,
      handlePersonSelectModal
    }}>
      { children }
    </AppContext.Provider>
  );
}
