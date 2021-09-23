import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useFruit } from "../hooks/useFruit";

import "../styles/auth.scss";

export function Fruit() {
  const { strawberry, apple, amount, handleFruits } = useFruit();

  return (
    <div id="page-auth">
      <aside>
        <i className="fas fa-award"></i>
        <strong>Morango &amp; Maça </strong>
        <p>Adquira uma cesta de frutas de maneira simples!</p>
      </aside>

      <main>
        <div className="main-content">
          <h1>Valor da Compra</h1>
          <form onSubmit={handleFruits}>
            <input
              type="number"
              id="strawberry"
              placeholder="Quantidade de morangos em Kg"
            />
            <input
              type="number"
              id="apple"
              placeholder="Quantidade de maças em Kg"
            />
            <Button>Calcular</Button>
          </form>
          <div className="separator">
            {" "}
            experimente mais <Link to="/room">aplicativos</Link>
          </div>
          {amount ? (
            <div>
              <h2>Kilo do morango: R${strawberry}</h2>
              <h2>Kilo da maça: R${apple}</h2>
              <h2>Valor total: R${amount}</h2>
            </div>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}
