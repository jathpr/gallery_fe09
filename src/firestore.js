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

export const sendData = async () => {
  await setDoc(doc(db, "users", "new-city-id"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
};

export const readData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
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
