import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config";

export const getServices = async () => {
  const colRef = collection(db, "services");
  return await getDocs(query(colRef));
};
