import { useContext } from "react";
import { TemperatureContext } from "../context/temperatureContext";

export function useFahrenheit() {
  const value = useContext(TemperatureContext);
  return value;
}
