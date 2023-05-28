import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (eamil, password) => {
    return createUserWithEmailAndPassword(auth, eamil, password);
  };
  const loginUser = (eamil, password) => {
    return signInWithEmailAndPassword(auth, eamil, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("i am in inside unsubscribe");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    loginUser,
    createUser,
    logout,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
