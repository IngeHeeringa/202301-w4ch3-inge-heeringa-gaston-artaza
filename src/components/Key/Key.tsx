import { useContext } from "react";
import { PhoneContext, StoreStructure } from "../../context/PhoneContext";

interface KeyProps {
  keyValue: string;
}

const Key = ({ keyValue }: KeyProps): JSX.Element => {
  const { addDigit } = useContext(PhoneContext) as StoreStructure;

  return (
    <button
      onClick={() => addDigit(keyValue)}
      className={`key${keyValue === "delete" ? " big" : ""}`}
    >
      {keyValue}
    </button>
  );
};

export default Key;
