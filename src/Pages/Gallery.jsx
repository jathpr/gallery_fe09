import { ImageList, ImageListItem } from "@material-ui/core";
import { useImages } from "../store/imageContext";

export const Gallery = () => {
  const imagesArray = useImages();
  return (
    <ImageList cols={2}>
      {imagesArray.map((item, id) => (
        <ImageListItem key={id} cols={item.cols || 1}>
          <img src={item.url} alt={item.name} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
