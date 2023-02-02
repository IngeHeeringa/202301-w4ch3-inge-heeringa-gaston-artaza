import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PhoneContext } from "../../context/PhoneContext";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When rendered with '1'", () => {
    test("Then it should show a button with the number 1 on the screen", () => {
      const keyText = "1";
      render(<Key keyText={keyText} />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks on a button with the number '1' on it", () => {
    test("Then the function addDigit() should be invoked", () => {
      const keyText = "1";
      const addDigit = jest.fn();
      const store = {
        phoneNumber: "",
        addDigit: addDigit,
        deletePhoneNumber: () => {},
        setIsCallingFalse: () => {},
        setIsCallingTrue: () => {},
        isCalling: false,
      };

      render(
        <PhoneContext.Provider value={store}>
          <Key keyText={keyText} />
        </PhoneContext.Provider>
      );

      const button = screen.getByRole("button");

      userEvent.click(button);

      expect(addDigit).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the 'delete' button", () => {
    test("Then the function deletePhoneNumber() should be invoked", () => {
      const keyText = "delete";
      const deletePhoneNumber = jest.fn();
      const store = {
        phoneNumber: "",
        addDigit: () => {},
        deletePhoneNumber: deletePhoneNumber,
        isCalling: false,
        setIsCallingFalse: () => {},
        setIsCallingTrue: () => {},
      };

      render(
        <PhoneContext.Provider value={store}>
          <Key keyText={keyText} />
        </PhoneContext.Provider>
      );

      const button = screen.getByRole("button");

      userEvent.click(button);

      expect(deletePhoneNumber).toHaveBeenCalled();
    });
  });
});
