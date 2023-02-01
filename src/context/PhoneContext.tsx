import { createContext, useState } from "react";

export const PhoneContext = createContext({});

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface StoreStructure {
  phoneNumber: string;
  addDigit: (keyValue: string) => void;
}

export const Provider = ({ children }: PhoneContextProviderProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const addDigit = (keyValue: string): void => {
    setPhoneNumber(phoneNumber + keyValue);
  };

  const store = { phoneNumber, addDigit } as StoreStructure;

  return (
    <PhoneContext.Provider value={store}>{children}</PhoneContext.Provider>
  );
};
