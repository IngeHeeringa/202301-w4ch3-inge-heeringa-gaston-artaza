import { useState } from "react";
import { PhoneContext } from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({ children }: PhoneContextProviderProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const addDigit = (keyText: string): void => {
    setPhoneNumber(phoneNumber + (keyText === "delete" ? "" : keyText));
  };

  const store = { phoneNumber, addDigit };

  return (
    <PhoneContext.Provider value={store}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
