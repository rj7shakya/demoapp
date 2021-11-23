import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }: any) => {
  const isLogin = () => {
    return localStorage.getItem("loggedin");
  };

  return (
    <Route
      {...rest}
      render={(props: any) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
