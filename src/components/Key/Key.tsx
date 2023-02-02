import { useContext } from "react";
import {
  PhoneContext,
  PhoneContextStructure,
} from "../../context/PhoneContext";

interface KeyProps {
  keyText: string;
}

const Key = ({ keyText }: KeyProps): JSX.Element => {
  const { addDigit } = useContext(PhoneContext) as PhoneContextStructure;

  return (
    <button
      onClick={() => addDigit(keyText)}
      className={`key${keyText === "delete" ? " big" : ""}`}
    >
      {keyText}
    </button>
  );
};

export default Key;
