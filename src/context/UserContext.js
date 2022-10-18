import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";

export let Authcontext = createContext()
let auth = getAuth(app)
const UserContext = ({ children }) => {
    let [users, setUsers] = useState('')
    let [loading, setLoading] = useState(true)

    let googleAuthProvider = new GoogleAuthProvider()
    let signWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    let createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    let SignOut = () => {
        return signOut(auth)
    }
    let sendauthenticationemail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    // Take the value and place it anywhere
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    let authInfo = { createUser, signIn, users, SignOut, signWithGoogle, sendauthenticationemail, loading }
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default UserContext;