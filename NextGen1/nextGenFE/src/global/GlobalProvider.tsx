import { createContext, FC, ReactNode, useState } from "react";

export const ContextProvider = createContext({});

interface iProps {
  children?: ReactNode;
  user?: any;
  setUser?: any;
}

export const GlobalProvider: FC<iProps> = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")!)
  );
  return (
    <ContextProvider.Provider value={{ user, setUser }}>
      {children}
    </ContextProvider.Provider>
  );
};
