import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config";
import { setDoc } from "firebase/firestore";

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("CCCC", user);
      return user.uid;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCurrentUser = async () => await auth.currentUser;
export const logout = async () => await signOut(auth);