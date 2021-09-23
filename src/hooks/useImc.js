import { useContext } from "react";
import { ImcContext } from "../context/ImcContext";

export function useImc() {
  const value = useContext(ImcContext);
  return value;
}
