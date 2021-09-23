import { ParsedTemp } from "../pages/temp";
import { TemperatureContextProvider } from "../context/temperatureContext";
import { Guardian } from "../components/Guardian";
import { ImcContextProvider } from "../context/ImcContext";
import { Imc } from "../pages/imc";
import {Fruit } from "../pages/fruit";
import { FruitContextProvider } from "../context/fruitContext";

var isAuthenticated = Boolean(localStorage.getItem("JWT"));

export function RouteTemp() {
  return (
    <TemperatureContextProvider>
      <Guardian
        exact
        path="/parsedTemp"
        component={ParsedTemp}
        auth={isAuthenticated}
      />
    </TemperatureContextProvider>
  );
}

export function RouteImc() {
  return (
    <ImcContextProvider>
      <Guardian 
        exact 
        path="/imc" 
        component={Imc} 
        auth={isAuthenticated} />
    </ImcContextProvider>
  );
}

export function RouteFruit() {
  return (
    <FruitContextProvider>
      <Guardian 
        exact 
        path="/shop" 
        component={Fruit} 
        auth={isAuthenticated} />
    </FruitContextProvider>
  );
}
