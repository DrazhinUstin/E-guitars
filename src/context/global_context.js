import React, { useContext } from 'react';
import useContentful from '../utils/useContentful';

const GlobalContext = React.createContext();
const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const { isLoading, isError, data: products } = useContentful();
    return (
        <GlobalContext.Provider value={{ isLoading, isError, products }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, useGlobalContext };
