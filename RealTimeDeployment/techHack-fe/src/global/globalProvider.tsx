import { FC, useState, createContext } from "react";

export const GlobalContext: any = createContext({});

export const GlobalProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("auth")!)
  );

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
