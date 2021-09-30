import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app } from "./firebase";

const storage = getStorage(app);

export const uploadImage = (file, name) => {
  const storageRef = ref(storage, `uuid/${name}`);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

export const downloadImage = async () => {
  const url = await getDownloadURL(ref(storage, `uuid/name`));

  // This can be downloaded directly:
  return url;
};
