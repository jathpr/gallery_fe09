import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Breadcrumbs } from "@material-ui/core";
import { SignIn } from "./Components/SignIn";
import { Gallery } from "./Components/Gallery";
import { UserInfoEdit } from "./Components/UserInfoEdit";

export const App = () => {
  const [user, setUser] = useState(null);

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
          <button onClick={() => setUser(null)}>Out</button>
        </Breadcrumbs>

        <hr />

        <Switch>
          <Route exact path="/">
            <div>Home</div>
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
