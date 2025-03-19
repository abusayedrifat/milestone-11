import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

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

      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email: userEmail}
      setUser(currentUser);
      setloading(false)

      if (currentUser) {
        axios.post('https://car-doctor-server-ten-neon.vercel.app/jwt',loggedUser, {withCredentials:true})
        .then(res=>{
          console.log(res.data);
        })
      }
      
      else{
        axios.post('https://car-doctor-server-ten-neon.vercel.app/logOut', loggedUser, {withCredentials:true})
        .then(res=>{
          console.log(res);
          
        })
      }
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
