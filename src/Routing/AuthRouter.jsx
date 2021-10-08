import { Switch, Route } from "react-router-dom";
import { AddImage } from "../Pages/AddImage";
import { UserInfoEdit } from "../Pages/UserInfoEdit";
import { Gallery } from "../Pages/Gallery";

export const AuthRouter = () => (
  <Switch>
    <Route path="/addImage">
      <AddImage />
    </Route>
    <Route path="/editUser">
      <UserInfoEdit />
    </Route>
    <Route path="/">
      <Gallery />
    </Route>
  </Switch>
);
