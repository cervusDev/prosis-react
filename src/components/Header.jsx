import logo from "../assets/logo.png";

import "../styles/header.scss";

export function Header({ children }) {
  return (
    <header>
      <div className="content">
        <img src={logo} alt="logo" />
        {children}
      </div>
    </header>
  );
}
