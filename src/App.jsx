import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Guardian } from "./components/Guardian";
import { Auth } from "./pages/auth";
import { Profile } from "./pages/profile";
import { Room } from "./pages/room";
import { RouteFruit, RouteImc, RouteTemp } from "./routes/routes";

export function App() {
  const isAuthenticated = Boolean(localStorage.getItem("JWT"));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/signup" component={Profile} />

        <Guardian 
          exact 
          path="/room" 
          component={Room} 
          auth={isAuthenticated} />

      </Switch>

      <Switch>
        <RouteImc />
      </Switch>

      <Switch>
        <RouteTemp />
      </Switch>

      <Switch>
        <RouteFruit/>
      </Switch>
      
    </BrowserRouter>
  );
}
