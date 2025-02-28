import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading,setloading] = useState(true)
  
  const createUser = (email, password) => {
     
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const signIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const logOut = () => {
    setloading(true)
    return signOut(auth);
  };
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false)
      console.log(currentUser);
    });
    return ()=>{
      unSubscribe()
    };
  }, []);
  
  const authInfo = { createUser, signIn, logOut, user,loading };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
