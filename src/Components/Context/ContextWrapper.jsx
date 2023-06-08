import { createContext, useEffect, useState } from "react";
import usePageTitle from "../../Custom hooks/pageTitleHook";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase-config";
import setToken from "../../utitlity-functions/setToken";

export const Contexts = createContext();

const ContextWrapper = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    usePageTitle();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,async currentUser => {

            setUser(currentUser);
            if(currentUser){
                setToken(currentUser.email);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerGoogle = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle);
    }

    const signOutUser = () => {
        return signOut(auth);
    }


    const contextList = { user, loading, setLoading, signUpWithEmail, signInWithEmail, signInWithGoogle, signOutUser }

    return (
        <>
            <Contexts.Provider value={contextList}>
                {children}
            </Contexts.Provider>
        </>
    );
};

export default ContextWrapper;