import { useContext } from "react";
import { PhoneContext } from "../../context/PhoneContext";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);

  return isCalling ? <span className="message">Calling...</span> : <></>;
};

export default Info;
