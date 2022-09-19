import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config";

export const all = async () => {
  const colRef = collection(db, "services");
  return await getDocs(query(colRef));
};
