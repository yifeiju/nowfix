import { createContext, useState } from "react";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [AppState, setAppState] = useState({
    services: [],
    userTypes: [],
    user: {},
  });
  console.log({ AppState });
  return (
    <AppContext.Provider value={[AppState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
