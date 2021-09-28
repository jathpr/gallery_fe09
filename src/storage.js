import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app } from "./firebase";

const storage = getStorage(app);
const storageRef = ref(storage, "some-child");

export const uploadImage = (file) => {
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

export const downloadImage = async () => {
  const url = await getDownloadURL(ref(storage, "some-child"));

  // This can be downloaded directly:
  return url;
};
