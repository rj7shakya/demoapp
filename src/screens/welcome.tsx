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
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};
