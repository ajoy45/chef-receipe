import React, { useContext } from 'react';
import { authContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const {user,isLoading}=useContext(authContext);
    let location = useLocation();
    console.log('pro location',location)
    if(isLoading){
      return <div>loading..</div>
    }
    if (user) {
        return children 
      }
    
      return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }

export default RequireAuth;