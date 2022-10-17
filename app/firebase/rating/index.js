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

  export const ratingRef = collection(db, "rating");

  // CREATE
export const createRating = ({ clientId, professionalId, rating }) => {
    return addDoc(ratingRef, { clientId, professionalId, rating });
  };
  
  const createRequestUserRating = (fieldName) => {
    return async (userId) => {
      return getDocs(
        query(ratingRef, where(fieldName, "==", userId))
      ).then(getArrayFromCollection);
    };
  };
  
  
  export const getUserRating = createRequestUserRating("professionalId");