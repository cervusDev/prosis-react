import { useParams, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useImc } from "../Hook/useImc";

import "../styles/auth.scss";

export function Imc() {
  const { id } = useParams();
  const { imc, result, handleImc } = useImc();

  return (
    <div>
      <div id="page-auth">
        <aside>
          <i className="fas fa-award"></i>
          <strong>IMC &amp; Saúde </strong>
          <p>Como saber seu imc impacta na sua vida?</p>
        </aside>

        <main>
          <div className="main-content">
            <h1>{id}</h1>
            <form onSubmit = {id === 'Calcular IMC'? handleImc: undefined}>
              <input
                type="number"
                id="height"
                placeholder="Qual a sua altura em m?"
              />
              <input
                type="number"
                id="weight"
                placeholder="Qual o seu peso em kg?"
              />
              <Button>Calcular</Button>
            </form>
            <div className="separator">
              {" "}
              tente outro <Link to="/room">aplicativo</Link>
            </div>
            <h2>{imc}</h2>
            <h2>{result}</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
