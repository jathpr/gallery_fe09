import { createContext, useState, useContext } from "react";
import aceSpades from "../assets/aceSpades.png";
import eightSpades from "../assets/eightSpades.png";
import jackSpades from "../assets/jackSpades.png";
import kingSpades from "../assets/kingSpades.png";
import nineSpades from "../assets/nineSpades.png";

const imageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState([
    aceSpades,
    eightSpades,
    jackSpades,
    kingSpades,
    nineSpades,
  ]);

  return (
    <imageContext.Provider value={image}>{children}</imageContext.Provider>
  );
};

export const useImages = () => {
  const imagesArray = useContext(imageContext);
  return imagesArray;
};
