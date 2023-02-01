import { useContext } from "react";
import { PhoneContext, StoreStructure } from "../../context/PhoneContext";

const Display = (): JSX.Element => {
  const { phoneNumber } = useContext(PhoneContext) as StoreStructure;

  return <span className="number">{phoneNumber}</span>;
};

export default Display;
