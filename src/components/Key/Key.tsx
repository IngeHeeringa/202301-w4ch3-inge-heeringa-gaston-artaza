import { useContext } from "react";
import {
  PhoneContext,
  PhoneContextStructure,
} from "../../context/PhoneContext";

interface KeyProps {
  keyText: string;
}

const Key = ({ keyText }: KeyProps): JSX.Element => {
  const { addDigit, deletePhoneNumber } = useContext(
    PhoneContext
  ) as PhoneContextStructure;

  return keyText === "delete" ? (
    <button onClick={() => deletePhoneNumber()} className={`key big`}>
      {keyText}
    </button>
  ) : (
    <button onClick={() => addDigit(keyText)} className={`key`}>
      {keyText}
    </button>
  );
};

export default Key;
