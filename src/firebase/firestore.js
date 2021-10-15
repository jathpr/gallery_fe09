import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const sendData = async (data, uid) => {
  await setDoc(doc(db, "users", uid), {
    ...data,
  });
};

export const readData = async (uid) => {
  try {
    const response = await getDoc(doc(db, "users", uid));
    return await response.data();
  } catch (error) {
    console.log("🚀 ~ file: firestore.js ~ line 22 ~ readData ~ error", error);
  }
};

/*export const sendData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};*/
