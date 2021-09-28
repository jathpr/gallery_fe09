import { UserProvider } from "./userContext";
import { ImageProvider } from "./imageContext";

export const Provider = ({ children }) => {
  return (
    <UserProvider>
      <ImageProvider>{children}</ImageProvider>
    </UserProvider>
  );
};
