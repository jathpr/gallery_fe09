import { UserProvider } from "./userContext";
import { ImageProvider } from "./imageContext";

export const Providers = ({ children }) => (
  <UserProvider>
    <ImageProvider>{children}</ImageProvider>
  </UserProvider>
);
