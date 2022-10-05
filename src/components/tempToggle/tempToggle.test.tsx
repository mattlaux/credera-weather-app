import React from "react";
import { render, screen } from "@testing-library/react";
import TempToggle from "./tempToggle";

describe("<TempToggle />", () => {
  test("renders toggle slider with text", () => {
    render(<TempToggle handleToggleTemp={jest.fn} />);

    const toggleButton = screen.getByRole("checkbox");
    const celsiusText = screen.getByText(/c°/i);
    const fahrenheitText = screen.getByText(/f°/i);
    expect(toggleButton).toBeInTheDocument();
    expect(celsiusText).toBeInTheDocument();
    expect(fahrenheitText).toBeInTheDocument();
  });
});
