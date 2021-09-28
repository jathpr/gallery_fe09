import { createContext, useState, useContext } from "react";
import { listenToUserChange } from "../auth";
const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  listenToUserChange(setUser);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = () => {
  const currUser = useContext(userContext);
  return currUser;
};
