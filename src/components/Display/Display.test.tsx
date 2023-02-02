import { render, screen } from "@testing-library/react";
import { PhoneContext } from "../../context/PhoneContext";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When rendered", () => {
    test("Then it should show a display on the screen", () => {
      const number = {
        phoneNumber: "123",
        addDigit: () => {},
        controlCallingStatus: () => {},
        isCalling: false,
      };

      render(
        <PhoneContext.Provider value={number}>
          <Display />
        </PhoneContext.Provider>
      );
      const display = screen.getByText(number.phoneNumber);

      expect(display).toBeInTheDocument();
    });
  });
});
