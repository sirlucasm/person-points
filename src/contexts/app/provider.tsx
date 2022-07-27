import { ProviderProps, useEffect, useState } from "react";
import { AppContext, AppContextProps } from "./context";

export const AppProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<[]>([]);

  useEffect(() => {
    const fetchTasks = () => {

    }

    fetchTasks();
  }, []);

  return (
    <AppContext.Provider value={{
      tasks,
    }}>
      { children }
    </AppContext.Provider>
  );
}
