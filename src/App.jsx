import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Breadcrumbs } from "@material-ui/core";
import { SignIn } from "./Components/SignIn";
import { Gallery } from "./Components/Gallery";

export const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      {user === null ? (
        <SignIn setUser={setUser} />
      ) : (
        <Router>
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">HOME</Link>

              <Link to="/gallery" color="inherit">
                GALLERY
              </Link>
              <Link to="/login" color="inherit">
                SIGN OUT
              </Link>
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
      )}
    </>
  );
};
