import { SignIn } from "Components/SignIn";
import { useHistory } from "react-router";
import { signIn } from "../firebase/auth";

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
