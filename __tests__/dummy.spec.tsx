import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../pages/about";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<About />);
  expect(getByText("I like pizza and cats.")).toBeInTheDocument();
});