import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Breadcrumbs } from "@material-ui/core";
import { SignIn } from "./Components/SignIn";
import { Gallery } from "./Components/Gallery";
import { UserInfoEdit } from "./Components/UserInfoEdit";
import { listenToUserChange, signOut } from "./auth";
import { Provider } from "./store";
import { AddImage } from "./Components/AddImage";
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";

export const App = () => {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Redirect to="/login" />
        </Switch>
      </Router>
    </Provider>
  );
};
