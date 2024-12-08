import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from 'firebase/auth'
import React, { Children, createContext, useEffect, useState } from 'react'
import { auth } from './firebase';
import axios from 'axios';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

export default function AuthProvider({children,id}) {

    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null)
    

         
    

    const createuserwithemail = (email,passowrd) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,passowrd)
    }

    const signinwithemail = (email,passowrd)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,passowrd)
    }

    const signinwithgoogle =() =>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }

    const logoutaccount = () =>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setloading(true)
            setUser(currentUser)
            setloading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        createuserwithemail,
        signinwithemail,
        signinwithgoogle,
        logoutaccount,
        user,
        setloading,
        loading,
       
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    )
}
