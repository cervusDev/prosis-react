import { createContext, useState, useEffect } from "react";
import { Api } from "../service/api";

export const FruitContext = createContext();

export function FruitContextProvider({ children }) {
  const [auth, setAuth] = useState([]);
  const [amount, setAmount] = useState(undefined);
  const [strawberry, setStrawberry] = useState(undefined);
  const [apple, setApple] = useState(undefined);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.questions(), true);
      const result = await response.json();

      setAuth(result);
    };

    loadData();
  }, []);

  function calculateFruits(poundStrawberry = 0, poundApple = 0) {
    let stramberryPrice;
    let applePrice;

    poundStrawberry > 5 ? (stramberryPrice = 2.2) : (stramberryPrice = 2.5);
    poundApple > 5 ? (applePrice = 1.5) : (applePrice = 1.8);

    setStrawberry(stramberryPrice);
    setApple(applePrice);

    const totalPounds = poundApple + poundStrawberry;
    let amount = stramberryPrice * poundStrawberry + applePrice * poundApple;

    if (totalPounds > 8 || amount > 25) {
      let discountValue = amount - amount * 0.1;
      return discountValue;
    } else {
      return amount;
    }
  }

  function handleFruits(event) {
    event.preventDefault();

    const poundStrawberry = Number(event.target.strawberry.value).toFixed(2);
    const poundApple = Number(event.target.apple.value).toFixed(2);

    return setAmount(calculateFruits(poundStrawberry, poundApple));
  }

  return (
    <FruitContext.Provider value={{ auth, strawberry, apple, amount, handleFruits }}>
      {children}
    </FruitContext.Provider>
  );
}
