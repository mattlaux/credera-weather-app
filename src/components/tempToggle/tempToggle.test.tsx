import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("clicking toggle slider calls handleToggleTemp prop", () => {
    const props = {
      handleToggleTemp: jest.fn(),
    };
    render(<TempToggle {...props} />);

    expect(props.handleToggleTemp).not.toHaveBeenCalled();
    const toggleButton = screen.getByRole("checkbox");
    expect(toggleButton).not.toBeChecked();
    userEvent.click(toggleButton);
    expect(toggleButton).toBeChecked();
    expect(props.handleToggleTemp).toHaveBeenCalled();
  });
});
