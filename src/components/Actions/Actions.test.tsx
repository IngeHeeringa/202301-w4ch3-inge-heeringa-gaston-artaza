import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PhoneContext } from "../../context/PhoneContext";
import Actions from "./Actions";

describe("Given an Actions component", () => {
  describe("When rendered with a positive calling status", () => {
    test("Then it should show a button with the text 'Hang up' on the screen", () => {
      const expectedActionText = "Hang up";
      const store = {
        phoneNumber: "",
        addDigit: () => {},
        deletePhoneNumber: () => {},
        isCalling: true,
        setIsCallingFalse: () => {},
        setIsCallingTrue: () => {},
      };

      render(
        <PhoneContext.Provider value={store}>
          <Actions />
        </PhoneContext.Provider>
      );

      const actionText = screen.getByText(expectedActionText);

      expect(actionText).toBeInTheDocument();
    });
  });

  describe("When rendered with a negative calling status", () => {
    test("Then it should show a button with the text 'Call' on the screen", () => {
      const expectedActionText = "Call";
      const store = {
        phoneNumber: "",
        addDigit: () => {},
        deletePhoneNumber: () => {},
        isCalling: false,
        setIsCallingFalse: () => {},
        setIsCallingTrue: () => {},
      };

      render(
        <PhoneContext.Provider value={store}>
          <Actions />
        </PhoneContext.Provider>
      );

      const actionText = screen.getByText(expectedActionText);

      expect(actionText).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Call' button", () => {
    test("Then the setIsCallingTrue function should be invoked", () => {
      const actionText = "Call";
      const store = {
        phoneNumber: "123456789",
        addDigit: () => {},
        deletePhoneNumber: () => {},
        isCalling: false,
        setIsCallingFalse: () => {},
        setIsCallingTrue: jest.fn(),
      };

      render(
        <PhoneContext.Provider value={store}>
          <Actions />
        </PhoneContext.Provider>
      );

      const callButton = screen.getByText(actionText);
      userEvent.click(callButton);

      expect(store.setIsCallingTrue).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the 'Hang up' button", () => {
    test("Then the setIsCallingFalse function should be invoked", () => {
      const actionText = "Hang up";
      const store = {
        phoneNumber: "",
        addDigit: () => {},
        deletePhoneNumber: () => {},
        isCalling: true,
        setIsCallingFalse: jest.fn(),
        setIsCallingTrue: () => {},
      };

      render(
        <PhoneContext.Provider value={store}>
          <Actions />
        </PhoneContext.Provider>
      );

      const hangUpButton = screen.getByText(actionText);
      userEvent.click(hangUpButton);

      expect(store.setIsCallingFalse).toHaveBeenCalled();
    });
  });
});
