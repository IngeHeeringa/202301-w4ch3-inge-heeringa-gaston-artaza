import { PhoneContext } from "../../context/PhoneContext";
import { useContext } from "react";

const Actions = (): JSX.Element => {
  const { isCalling, phoneNumber } = useContext(PhoneContext);

  return !isCalling ? (
    phoneNumber.length === 9 ? (
      <a href="call" className="call active">
        Call
      </a>
    ) : (
      <a href="call" className="call">
        Call
      </a>
    )
  ) : (
    <a href="hang-up" className="hang active">
      Hang up
    </a>
  );
};

export default Actions;
