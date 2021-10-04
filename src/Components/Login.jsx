import { useState } from "react";
import { useHistory } from "react-router";
import { createUser, signIn } from "../auth";
import { SignIn } from "./SignIn";

export const Login = () => {
  const handleSubmit = (login, password) => {
    signIn(login, password);
  };

  const history = useHistory();

  const routeToReg = () => {
    history.push("/registration");
  };

  return (
    <SignIn
      submitBtnName="Sign In"
      routeBtnName="Register"
      submitBtnHandler={handleSubmit}
      routeBtnHandler={routeToReg}
    />
  );
};
