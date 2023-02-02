import { render, screen } from "@testing-library/react";
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
});
