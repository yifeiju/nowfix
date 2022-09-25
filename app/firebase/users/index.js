import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

import { db } from "../config";

const userRef = collection(db, "user");

export const setUserData = (userData = {}) => {
  return setDoc(doc(userRef, userData.id), userData);
};

export const updateUserData = (userData = {}) => {
  return updateDoc(doc(userRef, userData.id), userData);
};

export const getUserData = (id) => {
  return getDoc(doc(userRef, id)).then((doc) => {
    console.log({ id, doc, data: doc.data() });
    return doc.data();
  });
};

export const allUserTypes = () => {
  const colRef = collection(db, "userTypes");
  return getDocs(query(colRef));
};
