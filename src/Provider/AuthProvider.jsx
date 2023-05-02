import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePhoneNumber, updateProfile } from "firebase/auth";
export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState(null)
    const createUser=(name,email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
       
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const authInfo={
        user,
        createUser,
        signIn,
        logOut
    }
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
        console.group(loggedUser)
        setUser(loggedUser)

    })
    return ()=>{
        unsubscribe();
    }

})

    return (
      <AuthContext.Provider value={authInfo}>
        {
            children
        }
      </AuthContext.Provider>
    );
};

export default AuthProvider;