import React, { useState } from "react";
import { PhoneContext } from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({ children }: PhoneContextProviderProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);

  const addDigit = (keyText: string): void => {
    setPhoneNumber(
      phoneNumber.length < 9
        ? phoneNumber + (keyText === "delete" ? "" : keyText)
        : phoneNumber
    );
  };

  const setIsCallingFalse = (): void => {
    setIsCalling(false);
  };

  const setIsCallingTrue = (): void => {
    setIsCalling(true);
    setPhoneNumber("");
  };

  const deletePhoneNumber = () => {
    setPhoneNumber("");
  };

  const store = {
    phoneNumber,
    addDigit,
    deletePhoneNumber,
    isCalling,
    setIsCallingFalse,
    setIsCallingTrue,
  };

  return (
    <PhoneContext.Provider value={store}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
