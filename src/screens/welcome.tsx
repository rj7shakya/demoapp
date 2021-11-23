import { Alert } from "../utils";

export const Welcome = (props: any) => {
  return (
    <div className="container">
      <div className="login__container">
        <div className="login text">Welcome</div>

        <div
          className="button"
          onClick={() => {
            localStorage.removeItem("loggedin");
            props?.history?.push("/login");
            Alert("Logout Successful", "success");
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};
