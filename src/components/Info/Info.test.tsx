import { render, screen } from "@testing-library/react";
import { PhoneContext } from "../../context/PhoneContext";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When rendered with a positive calling status", () => {
    test("Then it should show the message 'Calling...'", () => {
      const textInfo = "Calling...";
      const store = {
        phoneNumber: "",
        addDigit: () => {},
        deletePhoneNumber: () => {},
        setIsCallingFalse: () => {},
        setIsCallingTrue: () => {},
        isCalling: true,
      };

      render(
        <PhoneContext.Provider value={store}>
          <Info />
        </PhoneContext.Provider>
      );

      const info = screen.getByText(textInfo);

      expect(info).toBeInTheDocument();
    });
  });

  describe("When rendered with a negative calling status", () => {
    test("Then it should show nothing", () => {
      const textInfo = "Calling...";
      const store = {
        phoneNumber: "",
        addDigit: () => {},
        deletePhoneNumber: () => {},
        setIsCallingFalse: () => {},
        setIsCallingTrue: () => {},
        isCalling: false,
      };

      render(
        <PhoneContext.Provider value={store}>
          <Info />
        </PhoneContext.Provider>
      );

      const info = screen.queryByText(textInfo);

      expect(info).not.toBeInTheDocument();
    });
  });
});
