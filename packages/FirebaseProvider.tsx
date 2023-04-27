import React from 'react';

import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

import { FirebaseApp } from 'firebase/app';
import { User, getAuth, getIdToken } from 'firebase/auth';

export const firebaseContext = createContext<FirebaseContextHolder | null>(null);

type FirebaseContextHolder = {
    user?: User | null;
    isAuthenticated: boolean;
    idToken?: string;
    app?: FirebaseApp;
}

type Props = {
    app?: FirebaseApp
}

export const FirebaseProvider: FC<PropsWithChildren<Props>> = ({ app, children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState<User | null>(auth.currentUser)
    const [isAuthenticated, setAuthenticated] = useState(false);

    // Subscribe to auth change events
    useEffect(() => {
        const authUnsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        })
        
        return () => {
            authUnsubscribe()
        }
    }, [])

    // Subscribe to user changes
    useEffect(() => {
        setAuthenticated(user != null)
    }, [user])

    return (<firebaseContext.Provider value={{
        isAuthenticated,
        app,
        user
    }}>
        {children}
    </firebaseContext.Provider>)
}

export default FirebaseProvider