import { downloadImages } from "../firebase/storage";
import { createContext, useState, useContext, useEffect } from "react";
import { useUser } from "./userContext";

const imageContext = createContext();

export const ImageProvider = ({ children }) => {
  const user = useUser();
  const [images, setImages] = useState([]);

  useEffect(() => {
    user && user.uid && downloadImages(user.uid).then((res) => setImages(res));
  }, [user]);

  return (
    <imageContext.Provider value={images}>{children}</imageContext.Provider>
  );
};

export const useImages = () => {
  const imagesArray = useContext(imageContext);
  return imagesArray;
};
