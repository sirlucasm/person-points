import { ProviderProps, useEffect, useState } from "react";
import { AuthContext, AuthContextProps } from "./context";

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const fetchCurrentUser = () => {

    }

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{
      signed: !!currentUser
    }}>
      { children }
    </AuthContext.Provider>
  );
}
