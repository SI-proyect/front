import { createContext, useContext } from "react";

export const authContext = createContext()

//Hoock personalizado

export const useAuth = () => {
    const context = useContext(authContext)

    //Si no existe el contexto se mostrará este error
    if (!context) throw new Error('There is no auth provider')
    return context
}


export function AuthProvider({children}) {

    const user = {
        login: true
    }
    
    return (
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
}
