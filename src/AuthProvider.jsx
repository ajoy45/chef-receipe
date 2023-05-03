import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './firebase/firebase.config';
export const authContext=createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[isLoading,setIsLoading]=useState(true)
    const createUser=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
       return signOut(auth)
    }
    useEffect(()=>{
       const observer= onAuthStateChanged(auth,user=>{
            console.log('onAuth',user)
            setUser(user)
            setIsLoading(false)
        })
          return ()=>{
            observer()
          }
    },[])
    const updateUserProfile=(user,name,photoURL)=>{
       return updateProfile(user,{
            displayName:name, photoURL:photoURL
        })
    }
    const authInfo={
        createUser,
        signIn,
        user,
        updateUserProfile,
        isLoading,
        logOut
        
    }
    return (
        <authContext.Provider value={authInfo}>
           {children}
        </authContext.Provider>
    );
};

export default AuthProvider;