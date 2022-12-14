import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import { AppConstants } from "../../utils/constants";

import { db } from "../config";
import { getArrayFromCollection } from "../utils";

export const userRef = collection(db, "user");
const userTypeRef = collection(db, "userTypes");

export const setUserData = (userId, data = {}) => {
  return setDoc(doc(userRef, userId), data);
};

export const updateUserData = (userId, data = {}) => {
  return updateDoc(doc(userRef, userId), data);
};

export const getUserData = (id) => {
  return getDoc(doc(userRef, id)).then((doc) => {
    return doc.data();
  });
};

export const allUserTypes = () => {
  return getDocs(query(userTypeRef));
};

export const getUsersByServiceId = ({
  serviceId,
  listLimit = AppConstants.LIST.MAX_LIMIT,
  extraQueries = [],
} = {}) => {
  const queries = extraQueries.map((query = {}) => {
    return where(...Object.values(query));
  });
  return getDocs(
    query(
      userRef,
      where("services", "array-contains", serviceId),
      ...queries,
      limit(listLimit)
    )
  ).then(getArrayFromCollection);
};

export const getFavoriteProfessionals = async ({
  favoriteProfessionals = [],
  listLimit = AppConstants.LIST.MAX_LIMIT,
}) => {
  if (!favoriteProfessionals.length) return [];

  return getDocs(
    query(userRef, where("id", "in", favoriteProfessionals), limit(listLimit))
  ).then(getArrayFromCollection);
};

export const getHistoryProfessionals = async ({
  historyProfessionals = [],
  listLimit = AppConstants.LIST.MAX_LIMIT,
}) => {
  return getDocs(
    query(userRef, where("id", "in", historyProfessionals), limit(listLimit))
  ).then(getArrayFromCollection);
};
export const getHistoryClient = async ({
  historyClient = [],
  listLimit = AppConstants.LIST.MAX_LIMIT,
}) => {
  return getDocs(
    query(userRef, where("id", "in", historyClient), limit(listLimit))
  ).then(getArrayFromCollection);
};

export const setProfessionalRating = async (professionalId, newRating) => {
  const { rating = { sum: 0, quantity: 0 } } = await getUserData(
    professionalId
  );

  rating.quantity++;
  rating.sum += newRating;
  rating.avg = rating.sum / rating.quantity;
  updateUserData(professionalId, { rating });
};
