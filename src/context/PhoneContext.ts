import { createContext } from "react";

export interface PhoneContextStructure {
  phoneNumber: string;
  addDigit: (keyText: string) => void;
}

export const PhoneContext = createContext({} as PhoneContextStructure);
