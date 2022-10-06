import React from "react";
import { render, screen } from "@testing-library/react";
import CityContainer from "./cityContainer";

test("renders current weather information and temperature toggle button", () => {
  render(<CityContainer tempIsCelsius={false} handleToggleTemp={jest.fn} />);

  const weatherIcon = screen.getByRole("img");
  const windText = screen.getByText(/wind:/i);
  const toggleTempButton = screen.getByRole("checkbox");

  expect(weatherIcon).toBeInTheDocument();
  expect(windText).toBeInTheDocument();
  expect(toggleTempButton).toBeInTheDocument();
});
