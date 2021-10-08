import { useHistory } from "react-router";
import { SignIn } from "Components/SignIn";
import { createUser } from "../firebase/auth";

export const Registration = () => {
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
