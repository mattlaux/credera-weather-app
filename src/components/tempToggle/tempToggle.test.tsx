import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TempToggle from "./tempToggle";

describe("<TempToggle />", () => {
  test("renders toggle slider with text", () => {
    render(<TempToggle handleToggleTemp={jest.fn} tempIsCelsius={false} />);

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
      tempIsCelsius: false,
    };
    render(<TempToggle {...props} />);

    expect(props.handleToggleTemp).not.toHaveBeenCalled();
    const toggleButton = screen.getByLabelText(
      /toggle temperature to celsius/i
    );
    expect(toggleButton).not.toBeChecked();
    userEvent.click(toggleButton);
    expect(toggleButton).toBeChecked();
    expect(props.handleToggleTemp).toHaveBeenCalled();
  });

  test("fahrenheit lable text renders if temp is celsius", () => {
    render(<TempToggle handleToggleTemp={jest.fn} tempIsCelsius={true} />);

    const toggleButton = screen.getByLabelText(
      /toggle temperature to fahrenheit/i
    );
    expect(toggleButton).toBeInTheDocument();
  });
});
