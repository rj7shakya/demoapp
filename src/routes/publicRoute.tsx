import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ Component, ...rest }: any) => {
  const isLogin = () => localStorage.getItem("loggedin");

  return (
    <Route
      {...rest}
      render={(props: any) =>
        !isLogin() ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

export default PublicRoute;
