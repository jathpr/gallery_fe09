import { useState } from "react";
import { useHistory } from "react-router";
import { createUser, signIn } from "../auth";
import { useUser } from "../store/userContext";
import { SignIn } from "./SignIn";

export const Registration = () => {
  const user = useUser();
  console.log(user);

  const getNewUser = async (login, password) => {
    createUser(login, password);
  };
  const history = useHistory();

  const routeToLog = () => {
    history.push("/login");
  };

  return (
    <SignIn
      submitBtnName="Registration"
      routeBtnName="Return to Log"
      submitBtnHandler={getNewUser}
      routeBtnHandler={routeToLog}
    />
  );
};
