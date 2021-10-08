import { useEffect } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router";
import { Login } from "../Pages/Login";
import { useUser } from "../store/userContext";
import { Registration } from "../Pages/Registration";
import { Main } from "Components/Main";

export const Routing = () => {
  const user = useUser();

  const history = useHistory();

  useEffect(() => {
    user && history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Switch>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {!user && <Redirect to="/login" />}
      <Route>
        <Main />
      </Route>
    </Switch>
  );
};
