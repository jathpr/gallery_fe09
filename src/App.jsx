import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { Breadcrumbs } from "@material-ui/core";
import { SignIn } from "./Components/SignIn";
import { Gallery } from "./Components/Gallery";

export const App = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!user) history.push("/login");
  }, [user]);

  return (
    <Router>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">HOME</Link>

          <Link to="/gallery" color="inherit">
            GALLERY
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
        </Switch>
      </div>
    </Router>
  );
};
