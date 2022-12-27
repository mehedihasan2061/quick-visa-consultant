import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';
import Spin from '../../pages/Shared/Spin';


const auth = getAuth(app)

// create a context
export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [loading,setLoading]= useState(true)
    const [user,setUser]=useState(null)

// ssignin with email and passsword

const createUserWithEmail = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const loginWithEmail = (email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}

// signin withpopup

const socialSignin = (provider)=>{
    return signInWithPopup(auth,provider)
}

const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
}

// logout

const logout = ()=>{
    return signOut(auth);
}


// state ovserver

// state observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        


            setUser(currentUser);
        
      setLoading(false)
    });

    return () => {
        unsubscribe();
        
    }

}, [])

if(loading){
    return  <Spin/>
}

    const authInfo = {createUserWithEmail,loginWithEmail,loading,user,logout,updateUserProfile,socialSignin,setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;