import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../index";

export const getServices = async () => {
  const colRef = collection(db, "services");
  return await getDocs(query(colRef));
};
