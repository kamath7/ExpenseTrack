import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
export const useAddTransaction = () => {
  const transactionCollection = collection(db, "transactions");
  const addTransaction = async () => {
    await addDoc(transactionCollection, {
      userID: "",
      description: "",
      transactionAmount: 0,
      transactionType: "",
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
