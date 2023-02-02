import { useContext } from "react";
import {
  PhoneContext,
  PhoneContextStructure,
} from "../../context/PhoneContext";

const Display = (): JSX.Element => {
  const { phoneNumber } = useContext(PhoneContext) as PhoneContextStructure;

  return <span className="number">{phoneNumber}</span>;
};

export default Display;
