import { collection, doc, setDoc, addDoc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../config";

const userRef = collection(db, "user");

export const createUserData = (userData = {}) => {
  return setDoc(doc(userRef, userData.id), userData);
};

export const getUserData = (id) => {
  return getDoc(doc(userRef, id)).then((doc) => {
    console.log({ id, doc, data: doc.data() });
    return doc.data();
  });
};

export const allUserTypes = async () => {
  const colRef = collection(db, "userTypes");
  return await getDocs(query(colRef));
};