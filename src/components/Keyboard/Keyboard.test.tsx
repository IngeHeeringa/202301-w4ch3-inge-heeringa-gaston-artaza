import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When rendered", () => {
    test("It should show a list of keys on the screen", () => {
      render(<Keyboard />);

      const keys = screen.getAllByRole("listitem");

      keys.forEach((key) => expect(key).toBeInTheDocument());
    });
  });
});
