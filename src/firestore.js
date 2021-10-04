import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const sendData = async (data, uid) => {
  await setDoc(doc(db, "users", uid), {
    ...data,
  });
};

export const readData = async (uid) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  let user;
  querySnapshot.forEach((doc) => {
    if (doc.id === uid) {
      user = doc.data();
    }
  });
  return user;
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
