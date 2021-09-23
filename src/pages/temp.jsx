import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import "../styles/auth.scss";
import { useState } from "react";

export function ParsedTemp() {
  const [celsius, setCelsius] = useState(undefined);
  const [fahrenheit, setFahrenheit] = useState(undefined);

  function toCelsius() {
    const result = ((fahrenheit - 32) * 5) / 9;
    return result.toFixed(2);
  }

  function toFahrenheit() {
    const result = (celsius * 9) / 5 + 32;
    return result.toFixed(2);
  }

  function handleTemp(event) {
    event.preventDefault();

    event.target.celsius.value
      ? setCelsius(toFahrenheit())
      : setFahrenheit(toCelsius());
    
    setTimeout(() => {
      setCelsius('')
      setFahrenheit('')
    }, 3000)
  }

  return (
    <div id="page-auth">
      <aside>
        <i className="fas fa-award"></i>
        <strong>Celsius &amp; Fahrenheit </strong>
        <p>Alexa, quantos graus está fazendo agora?</p>
      </aside>

      <main>
        <div className="main-content">
          <h1>Celsius &amp; Fahrenheit</h1>
          <form onSubmit={handleTemp}>
            <input
              type="number"
              id="celsius"
              value={celsius}
              placeholder="°C em °F"
              onChange={(event) => {
                setCelsius(event.target.value);
              }}
            />
            <input
              type="number"
              id="fahrenheit"
              value={fahrenheit}
              placeholder="°F em °C"
              onChange={(event) => {
                setFahrenheit(event.target.value);
              }}
            />
            <Button>Calcular</Button>
          </form>
          <div className="separator">
            {" "}
            experimente mais <Link to="/room">aplicativos</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
