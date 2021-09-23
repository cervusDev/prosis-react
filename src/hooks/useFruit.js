import { useContext } from "react";
import { FruitContext } from "../context/fruitContext";

export function useFruit() {
  const value = useContext(FruitContext);
  return value;
}
