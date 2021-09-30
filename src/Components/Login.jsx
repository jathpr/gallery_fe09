import { useState } from "react";
import { useHistory } from "react-router";
import { createUser, signIn } from "../auth";
import { useUser } from "../store/userContext";
import { SignIn } from "./SignIn";

export const Login = () => {
  const user = useUser();
  console.log(user);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLog = (e) => {
    setLogin(e.target.value);
  };

  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn(login, password);
  };
  const getNewUser = async () => {
    createUser(login, password);
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
