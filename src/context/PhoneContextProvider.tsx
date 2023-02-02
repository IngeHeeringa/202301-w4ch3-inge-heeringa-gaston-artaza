import { useState } from "react";
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

  const controlCallingStatus = (): void => {
    setIsCalling(!isCalling);
  };

  const deletePhoneNumber = () => {
    setPhoneNumber("");
  };

  const store = {
    phoneNumber,
    addDigit,
    controlCallingStatus,
    isCalling,
    deletePhoneNumber,
  };

  return (
    <PhoneContext.Provider value={store}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
