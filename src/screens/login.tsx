import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Alert } from "../utils";

export const Login = (props: any) => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log(name, password);
    if (name === "") {
      Alert("Name is required", "error");
    } else if (password === "") {
      Alert("Password is required", "error");
    } else if (name === "rj" && password === "rj") {
      localStorage.setItem("loggedin", "login");
      props?.history?.push("/home");
      Alert("Login Successful", "success");
    } else {
      Alert("Invalid Credentials", "error");
    }
  };

  return (
    <div className="container">
      <div className="login__container">
        <div className="login text">Login</div>

        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          style={{ marginBottom: "2rem" }}
          type={"text"}
          value={name}
          onChange={(e: any) => setname(e?.target?.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={"password"}
          style={{ marginBottom: "2rem" }}
          value={password}
          onChange={(e: any) => setPassword(e?.target?.value)}
        />

        <div className="button" onClick={onSubmit}>
          Login
        </div>
      </div>
    </div>
  );
};
