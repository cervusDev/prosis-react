import { Route, Redirect } from "react-router-dom";

export function Guardian({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
}
