import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Breadcrumbs } from "@material-ui/core";
import { SignIn } from "./Components/SignIn";
import { Gallery } from "./Components/Gallery";
import { UserInfoEdit } from "./Components/UserInfoEdit";
import { listenToUserChange, signOut } from "./auth";

export const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    listenToUserChange();
  }, []);

  return (
    <Router>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">HOME</Link>

          <Link to="/gallery" color="inherit">
            GALLERY
          </Link>
          <Link to="/editUser" color="inherit">
            Edit User
          </Link>
          <button onClick={() => signOut()}>Out</button>
        </Breadcrumbs>

        <hr />

        <Switch>
          <Route exact path="/">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/login">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/editUser">
            <UserInfoEdit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
