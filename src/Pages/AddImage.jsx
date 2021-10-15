import styled from "@emotion/styled";
import { useDisplayImage } from "helpers/useDisplayImage";
import { useState } from "react";
import { uploadImage } from "../firebase/storage";
import { useUser } from "../store/userContext";

export const AddImage = () => {
  const [url, setUrl] = useState();
  const [value, setValue] = useState();
  const user = useUser();

  const { result, uploader } = useDisplayImage();

  return (
    <>
      <input
        onChange={(e) => {
          setUrl(e.target.files[0]);
          uploader(e);
        }}
        type="file"
      />
      {result && <Image src={result} alt="chosen image" />}
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

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
