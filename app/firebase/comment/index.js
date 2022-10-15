import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
  } from "firebase/firestore";
  
  import { db } from "../config";
  import { getArrayFromCollection } from "../utils";

  export const commentRef = collection(db, "comment");

  // CREATE
export const createComment = ({ clientId, professionalId, date , comment }) => {
    return addDoc(commentRef, { clientId, professionalId, date , comment });
  };
  
  const createRequestUserComment = (fieldName) => {
    return async (userId) => {
      return getDocs(
        query(commentRef, where(fieldName, "==", userId), orderBy("date", "desc"))
      ).then(getArrayFromCollection);
    };
  };
  
  
  export const getUserComment = createRequestUserComment("professionalId");