import { uploadImage, downloadImage } from "../storage";
import { useState, useEffect } from "react";
import { useUser } from "../store/userContext";
export const AddImage = () => {
  const [url, setUrl] = useState();
  const [value, setValue] = useState();
  const user = useUser();

  return (
    <>
      <input onChange={(e) => setUrl(e.target.files[0])} type="file" />
      <input onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          uploadImage(url, value, user.uid);
        }}
      >
        Add
      </button>
    </>
  );
};
