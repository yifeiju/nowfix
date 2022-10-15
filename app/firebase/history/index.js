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

export const historyRef = collection(db, "history");

// CREATE
export const createHistory = ({ clientId, professionalId, date }) => {
  return addDoc(historyRef, { clientId, professionalId, date });
};

const createRequestUserHistory = (fieldName) => {
  return async (userId) => {
    return getDocs(
      query(historyRef, where(fieldName, "==", userId), orderBy("date", "desc"))
    ).then(getArrayFromCollection);
  };
};

export const getClientHistory = createRequestUserHistory("clientId");
export const getProfessionalHistory =
  createRequestUserHistory("professionalId");
