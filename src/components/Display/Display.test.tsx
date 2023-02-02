import { render, screen } from "@testing-library/react";
import { PhoneContext } from "../../context/PhoneContext";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When rendered with phone number '123'", () => {
    test("Then it should show a display with phone number '123' on the screen", () => {
      const store = {
        phoneNumber: "123",
        addDigit: () => {},
        deletePhoneNumber: () => {},
      };

      render(
        <PhoneContext.Provider value={store}>
          <Display />
        </PhoneContext.Provider>
      );

      const display = screen.getByText(store.phoneNumber);

      expect(display).toBeInTheDocument();
    });
  });
});
