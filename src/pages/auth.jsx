import { useHistory, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Api } from "../service/api";

import logo from "../assets/logo.png";

import "../styles/auth.scss";

export function Auth() {
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email);

    const payload = {
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.login(), payload);
    const result = await response.json();

    localStorage.setItem("JWT", result.accessToken);
    history.push("/room");
  }

  return (
    <div id="page-auth">
      <aside>
        <i className="fas fa-question"></i>
        <strong>Login &amp; Desafios </strong>
        <p>crie sua perfil e resolva questões interessantes</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logo} alt="logo" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Entre com seu email"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entre com sua senha"
            />
            <Button>Entrar</Button>
          </form>
          <div className="separator">
            {" "}
            ou crie seu <Link to="/signup">cadastro</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
