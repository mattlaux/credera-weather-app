import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  test("renders necessary components", () => {
    render(<App />);

    const locationAndDate = screen.getByText(/dallas, tx/i);
    const currentWeather = screen.getByText(/wind:/i);
    const tempToggle = screen.getByRole("checkbox");
    const weekForecast = screen.getByText(/wed/i);

    expect(locationAndDate).toBeInTheDocument();
    expect(currentWeather).toBeInTheDocument();
    expect(tempToggle).toBeInTheDocument();
    expect(weekForecast).toBeInTheDocument();
  });

  test("toggling temp button changes temperature in currentWeather and weekForecast", () => {
    render(<App />);

    let currentTemp = screen.getByText(/93/i);
    let wedTemp = screen.getByText(/45/i);
    let satTemp = screen.getByText(/32/i);

    expect(currentTemp).toBeInTheDocument();
    expect(wedTemp).toBeInTheDocument();
    expect(satTemp).toBeInTheDocument();

    const tempToggle = screen.getByRole("checkbox");
    userEvent.click(tempToggle);

    expect(currentTemp).toHaveTextContent("34°");
    expect(wedTemp).toHaveTextContent("8°");
    expect(satTemp).toHaveTextContent("0°");
  });
});
