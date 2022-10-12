import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
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

export const getCurrentUser = () => auth.currentUser;
export const logout = () => signOut(auth);

export const changePassword = ({ email, password }, newPassword) => {
  const credentials = EmailAuthProvider.credential(email, password);
  reauthenticateWithCredential(auth.currentUser, credentials).then(() => {
    updatePassword(auth.currentUser, newPassword);
  });
};
