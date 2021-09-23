import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useImc } from "../hooks/useImc";

import "../styles/auth.scss";

export function Imc() {
  const { imc, result, handleImc } = useImc();

  return (
    <div id="page-auth">
      <aside>
        <i className="fas fa-award"></i>
        <strong>IMC &amp; Saúde </strong>
        <p>Como o imc impacta na sua vida?</p>
      </aside>

      <main>
        <div className="main-content">
          <h1>Calcular IMC</h1>
          <form onSubmit={handleImc}>
            <input
              type="text"
              id="height"
              placeholder="Qual a sua altura em m? Ex: 1.72"
            />
            <input
              type="text"
              id="weight"
              placeholder="Qual o seu peso em kg? Ex: 80.5"
            />
            <Button>Calcular</Button>
          </form>
          <div className="separator">
            {" "}
            experimente mais <Link to="/room">aplicativos</Link>
          </div>
          {result ? (
            <div>
              <h2>Seu Imc: {imc}</h2>
              <h2>{result}</h2>
            </div>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}
