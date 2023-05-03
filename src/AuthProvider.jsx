import React, { createContext } from 'react';
export const authContext=createContext(null)
const AuthProvider = ({children}) => {
    const createUser=()=>{
        console.log('check')
    }
    const authInfo={
        createUser
        
    }
    return (
        <authContext.Provider value={authInfo}>
           {children}
        </authContext.Provider>
    );
};

export default AuthProvider;