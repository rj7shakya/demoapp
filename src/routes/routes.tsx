import { Welcome, Login } from "../screens";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { Fragment } from "react";

const Routes = () => {
  return (
    <Fragment>
      <PublicRoute path="/login" exact Component={Login} />
      <PrivateRoute path="/home" exact Component={Welcome} />
      <PublicRoute path="/" exact Component={Login} />
    </Fragment>
  );
};

export default Routes;
