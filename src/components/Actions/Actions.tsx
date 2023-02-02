import { PhoneContext } from "../../context/PhoneContext";
import React, { useContext } from "react";

const Actions = (): JSX.Element => {
  const { isCalling, phoneNumber, setIsCallingFalse, setIsCallingTrue } =
    useContext(PhoneContext);

  const handleClickIsCallingTrue = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsCallingTrue();
    setTimeout(setIsCallingFalse, 5000);
  };

  const handleClickIsCallingFalse = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsCallingFalse();
  };

  return !isCalling ? (
    phoneNumber.length === 9 ? (
      <a href="call" className="call active" onClick={handleClickIsCallingTrue}>
        Call
      </a>
    ) : (
      <a href="call" className="call">
        Call
      </a>
    )
  ) : (
    <a
      href="hang-up"
      className="hang active"
      onClick={handleClickIsCallingFalse}
    >
      Hang up
    </a>
  );
};

export default Actions;
