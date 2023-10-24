import { createContext, useContext, useState } from "react";

const CoachContext = createContext({});

export const CoachProvider = ({children}) => {
    const [clientel, setClientel] = useState();

    return(
        <CoachContext.Provider 
            value={{
                clientel,
                setClientel,
            }}
        >
            {children}
        </CoachContext.Provider>
    );
};

export const useCoach = () => {
    const context = useContext(CoachContext);
    return{
        clientel: context.clientel,
        setClientel: context.setClientel,
    };
};