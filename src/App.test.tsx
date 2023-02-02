import { render, screen } from "@testing-library/react";
import App from "./App";
import PhoneContextProvider from "./context/PhoneContextProvider";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a phone on the screen", () => {
      render(
        <PhoneContextProvider>
          <App />
        </PhoneContextProvider>
      );

      const phone = screen.getByRole("main");

      expect(phone).toBeInTheDocument();
    });
  });
});
