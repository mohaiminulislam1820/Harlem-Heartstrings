import { createContext } from "react";

export const Contexts = createContext();

const ContextWrapper = ({ children }) => {


    const contextList = {}

    return (
        <>
            <Contexts.Provider value={contextList}>
                {children}
            </Contexts.Provider>
        </>
    );
};

export default ContextWrapper;