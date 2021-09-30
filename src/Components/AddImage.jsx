import { uploadImage, downloadImage } from "../storage";
import { useState, useEffect } from "react";
export const AddImage = () => {
  const [url, setUrl] = useState();
  const [value, setValue] = useState();
  useEffect(() => {
    downloadImage().then(setUrl);
  }, [downloadImage]);

  return (
    <>
      <input onChange={(e) => setUrl(e.target.files[0])} type="file" />
      <input onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          uploadImage(url, value);
        }}
      >
        Add
      </button>
    </>
  );
};
