import { useHistory } from "react-router";
import { Button } from "../components/Button";

import { Api } from "../service/api";

import logo from "../assets/logo.png";

import "../styles/auth.scss";

export function Profile() {
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      username,
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.createUser(), payload);
    const result = await response.json();

    localStorage.setItem("JWT", result.accessToken);
    history.push("/");
  }

  return (
    <div id="page-auth">
      <aside>
        <i className="fas fa-signature"></i>
        <strong>Login &amp; Desafios </strong>
        <p>crie sua perfil e resolva questões interessantes</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logo} alt="letmeask" />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Entre com seu username"
            />
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
            <Button>Cadastrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
