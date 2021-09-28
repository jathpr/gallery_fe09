import { uploadImage, downloadImage } from "../storage";
import { useState, useEffect } from "react";
export const AddImage = () => {
  const [url, setUrl] = useState();
  useEffect(() => {
    downloadImage().then(setUrl);
  }, [downloadImage]);
  return (
    <>
      <input onChange={(e) => uploadImage(e.target.files[0])} type="file" />
      <img src={url} width="100" height="100" />;
    </>
  );
};
