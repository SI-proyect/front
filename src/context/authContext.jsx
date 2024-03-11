import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
 
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])
    
    return (
        <authContext.Provider value={{ signup, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}
