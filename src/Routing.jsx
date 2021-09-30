import { useEffect } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router";
import { AuthRouter } from "./Components/AuthRouter";
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";
import { useUser } from "./store/userContext";
export const Routing = () => {
  const user = useUser();

  const history = useHistory();
  useEffect(() => {
    user && history.push("/");
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
        <AuthRouter />
      </Route>
    </Switch>
  );
};
