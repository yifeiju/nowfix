import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import { auth, db } from "../config";

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      return user.uid;
    })
    .catch((error) => {
      console.log(error);
    });
};


export const getCurrentUser = async () => await auth.currentUser;
export const logout = async () => await signOut(auth);
