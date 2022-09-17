import { createContext, useState } from "react";
import { fakeServices } from "../hardCode";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState({
    services: fakeServices,
    userType: [],
    user: {},
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
