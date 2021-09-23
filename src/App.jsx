import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Guardian } from "./components/Guardian";
import { Auth } from "./pages/auth";
import { Profile } from "./pages/profile";
import { Imc } from "./pages/imc";
import { Room } from "./pages/room";
import { ImcContextProvider } from "./context/ImcContext";

export function App() {
  const isAuthenticated = Boolean(localStorage.getItem("JWT"));

  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/" component={Auth} />
        <Route path="/signup" component={Profile} />

        <Guardian 
          exact 
          path="/room" 
          component={Room} 
          auth={isAuthenticated} />
          
        <ImcContextProvider>
          <Guardian
            path="/room/:id"
            component={Imc}
            auth={isAuthenticated}
          />
        </ImcContextProvider>

      </Switch>
    </BrowserRouter>
  );
}
