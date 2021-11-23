import { Alert, Input } from "../utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = (props: any) => {
  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      password: yup.string().required("Password is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: any) => {
    if (values?.name === "rj" && values?.password === "rj") {
      localStorage.setItem("loggedin", "login");
      props?.history?.push("/home");
      Alert("Login Successful", "success");
    }
  };

  return (
    <div className="container">
      <div className="login__container">
        <div className="login text">Login</div>
        <Input
          name="Name"
          required
          type={"text"}
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          name="Password"
          required
          type={"password"}
          register={register("password")}
          error={errors.password?.message}
        />

        <div className="button" onClick={handleSubmit(onSubmit)}>
          Login
        </div>
      </div>
    </div>
  );
};
