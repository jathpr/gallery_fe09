import { AuthRouter } from "Routing/AuthRouter";
import { Header } from "./Header/Header";

export const Main = () => (
  <>
    <Header />
    <AuthRouter />
  </>
);
