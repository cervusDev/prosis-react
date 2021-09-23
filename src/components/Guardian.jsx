import { Route, Redirect } from "react-router-dom";

export function Guardian({ component: Component, ...rest }) {
  const auth = Boolean(localStorage.getItem("JWT"));

  return (
    <Route
      {...rest}
      render={(props) => {
        auth === true ? (
          <Component {...props} auth={auth} />
        ) : (
          <Redirect to="/room" />
        );
      }}
    />
  );
}
