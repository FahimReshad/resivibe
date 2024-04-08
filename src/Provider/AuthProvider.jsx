/* eslint-disable react/prop-types */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }
  const githubSignIn = () => {
    return signInWithPopup (auth, githubProvider);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, currentUser => {  
        setUser(currentUser);
        console.log("observing", currentUser);
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const authInfo = { user, createUser, signInUser, logOut, googleSignIn, githubSignIn };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
