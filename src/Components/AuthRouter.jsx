import { Breadcrumbs } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import { AddImage } from "./AddImage";
import { Gallery } from "./Gallery";
import { UserInfoEdit } from "./UserInfoEdit";

export const AuthRouter = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">HOME</Link>

        <Link to="/gallery" color="inherit">
          GALLERY
        </Link>
        <Link to="/addImage" color="inherit">
          ADD IMAGE
        </Link>
        <Link to="/editUser" color="inherit">
          Edit User
        </Link>
        {/* <button onClick={() => signOut()}>Out</button> */}
      </Breadcrumbs>
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/addImage">
          <AddImage />
        </Route>
        <Route path="/editUser">
          <UserInfoEdit />
        </Route>
      </Switch>
    </>
  );
};
