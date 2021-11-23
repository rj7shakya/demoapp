import { Alert, Input } from "../utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = (props: any) => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
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
    if (
      values?.email === "dev.test@gmail.com" &&
      values?.password === "dev1234"
    ) {
      localStorage.setItem("loggedin", "login");
      props?.history?.push("/home");
      Alert("Login Successful", "success");
    }
  };

  return (
    <div className="container">
      <div className="login__container">
        <img
          src={
            "https://user-images.githubusercontent.com/33741753/143061303-5dacd94c-a88b-4311-a65a-be0d51f5ffc8.jpeg"
          }
          className="image"
        />
        <div className="login text">Login</div>
        <Input
          name="Email"
          required
          type={"text"}
          register={register("email")}
          error={errors.email?.message}
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
