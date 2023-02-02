import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When its rendered", () => {
    test("Then it should show the message 'Calling...'", () => {
      const textInfo = "Calling...";
      render(<Info />);
      const info = screen.getByText(textInfo);
      expect(info).toBeInTheDocument();
    });
  });
});
