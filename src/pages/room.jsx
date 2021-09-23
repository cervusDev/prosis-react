import { Api } from "../service/api";
import { useEffect, useState } from "react";

import "../styles/room.scss";
import { Header } from "../components/Header";
import { RoomCode } from "../components/Code";
import { useHistory } from "react-router-dom";

export function Room() {
  const history = useHistory();
  const [, setAuth] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.questions(), true);
      const result = await response.json();

      setAuth(result);
    };

    loadData();
  }, []);

  function NavigateToFC() {
    history.push("/parsedTemp");
  }

  function NavigateToImc() {
    history.push("/imc");
  }

  function NavigateTopPrice() {
    history.push("/shop");
  }

  return (
    <div id="page-room">
      <Header>
        <RoomCode code="73" />
      </Header>

      <main>
        <div className="room-title">
          <h1>Seja bem vindo!</h1>
          <span>3 desafio(s)</span>
        </div>

        <div className="form-footer">
          <div className="signin">
            <span>
              Conheça o desenvolvedor, <a href="https://github.com/gucervus">github</a>.
            </span>
          </div>
        </div>
      </main>

      <section>
        <div onClick={NavigateToFC}>
          <h2>Celsius &amp; Fahrenheit</h2>
        </div>

        <div onClick={NavigateToImc}>
          <h2>Calcular IMC</h2>
        </div>

        <div onClick={NavigateTopPrice}>
          <h2>Valor da Compra</h2>
        </div>
      </section>
    </div>
  );
}
