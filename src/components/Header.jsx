import { useHistory } from "react-router";
import logo from "../assets/logo.png";

import "../styles/header.scss";

export function Header({ children }) {
  const history = useHistory();
  function NavigateToHome() {
    history.push("/")
  }
  return (
    <header>
      <div className="content">
        <img 
          src={logo} 
          alt="logo"
          onClick = {NavigateToHome} />
        {children}
      </div>
    </header>
  );
}
