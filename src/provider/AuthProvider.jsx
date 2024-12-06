import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const toastMessage = (message, type = "") => {
        toast(message, {
            type: type,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

    // create user using email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update current user profile
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    // sign in user using email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in using google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // user sign out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer for managing user state
    useEffect(() => {
        const observer = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            observer();
        }
    }, [])

    const authInfo = {user, setUser, createUser, updateUser, signInUser, googleSignIn, signOutUser, loading, toastMessage};
    
    return (
        <AuthContext.Provider value={authInfo}>
            <ToastContainer />
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;