import { createContext } from "react";

export interface PhoneContextStructure {
  phoneNumber: string;
  addDigit: (keyText: string) => void;
  deletePhoneNumber: () => void;
}

export const PhoneContext = createContext({} as PhoneContextStructure);
