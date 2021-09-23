import { Api } from "../service/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/room.scss";
import { Header } from "../components/Header";
import { RoomCode } from "../components/Code";

export function Room() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.questions(), true);

      const bodyResult = await response.json();

      setQuestions(bodyResult);
    };

    loadData();
  }, []);

  return (
    <div id="page-room">
      <Header>
        <RoomCode code="73" />
      </Header>

      <main>
        <div className="room-title">
          <h1>Seja bem vindo!</h1>
          <span>{questions.length} desafio(s)</span>
        </div>

        <div className="form-footer">
          <div className="signin">
            <span>
              Sobre este projeto, <button>github</button>.
            </span>
          </div>
        </div>
      </main>

      <section>
        {questions.map((value) => (
          <div>
            <Link to={`/room/${value.title}`}>
              <h2>{value.title}</h2>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
