import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext()

//Hoock personalizado

export const useAuth = () => {
    const context = useContext(authContext)

    //Si no existe el contexto se mostrará este error
    if (!context) throw new Error('There is no auth provider')
    return context
}


export function AuthProvider({children}) {

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
    
    return (
        <authContext.Provider value={{ signup }}>
            {children}
        </authContext.Provider>
    )
}
