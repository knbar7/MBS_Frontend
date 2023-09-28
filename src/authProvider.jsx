import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Kendall"
    });

    return(
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return{
        user: context.user,
        setUser: context.setUser,
    }
}