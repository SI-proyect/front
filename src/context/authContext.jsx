import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

//Hoock personalizado

export const useAuth = () => {
  const context = useContext(authContext);

  //Si no existe el contexto se mostrará este error
  if (!context) throw new Error("There is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const logout = () => {
    setIsLogged(false);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        loginWithGoogle,
        user,
        logout,
        loading,
        resetPassword,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
