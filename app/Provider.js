import { createContext, useEffect, useState } from 'react';
const Provider = ({ children }) => {
   
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();  