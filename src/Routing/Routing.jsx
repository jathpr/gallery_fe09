import { useEffect } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router";
import { Login } from "../Pages/Login";
import { useUser } from "../store/userContext";
import { Registration } from "../Pages/Registration";
import { Main } from "Components/Main";

export const Routing = () => {
  const user = useUser();
  console.log("🚀 ~ file: Routing.jsx ~ line 10 ~ Routing ~ user", user);

  const history = useHistory();

  useEffect(() => {
    user && user.uid && history.push("/");
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
