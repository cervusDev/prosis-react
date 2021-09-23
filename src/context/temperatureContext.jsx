import { createContext, useEffect, useState } from "react";
import { Api } from "../service/api";

export const TemperatureContext = createContext();

export function TemperatureContextProvider({ children }) {
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.questions(), true);
      const result = await response.json();

      setAuth(result);
    };

    loadData();
  }, []);

  return (
    <TemperatureContext.Provider value={{ auth }}>
      {children}
    </TemperatureContext.Provider>
  );
}
