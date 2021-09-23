import { createContext, useState, useEffect } from "react";
import { Api } from "../service/api";

export const ImcContext = createContext();

export function ImcContextProvider({ children }) {
  const [auht, setAuth] = useState([]);
  const [imc, setImc] = useState(undefined);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.questions(), true);
      const result = await response.json();

      setAuth(result);
    };

    loadData();
  }, []);

  function Imc(imc) {
    var result = "";

    if (imc < 18.5) {
      result = "Magreza";
    } else if (18.5 <= imc && imc <= 24.9) {
      result = "Normal";
    } else if (24.9 <= imc && imc <= 30) {
      result = "Obesidade de grau I: Sobrepreso";
    } else if (30 <= imc && imc <= 40) {
      result = "Obesidade de grau II: Obsedidade";
    } else if (imc > 40) {
      result = "Obesidade de grau III: Obesidade grave";
    }

    return result;
  }

  function handleImc(event) {
    event.preventDefault();

    const height = Number(event.target.height.value);
    const weight = Number(event.target.weight.value);

    const imc = weight / height**2;

    setImc(imc.toFixed(2));
    setResult(Imc(imc));
  }

  return (
    <ImcContext.Provider value={{ auht, imc, result, handleImc }}>
      {children}
    </ImcContext.Provider>
  );
}
