import { Alert } from "../utils";

export const Welcome = (props: any) => {
  return (
    <div className="container">
      <div className="login__container">
        <img
          src={
            "https://user-images.githubusercontent.com/33741753/143061927-b11cb978-acab-4a69-bf5b-ba13889be84e.jpeg"
          }
          className="image"
        />
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
