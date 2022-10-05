import React from "react";
import { render, screen } from "@testing-library/react";
import LocationAndDate from "./locationAndDate";

describe("<CurrentWeather />", () => {
  test("renders city with location pin and date", () => {
    Date.now = jest.fn(() => 1665000432276);

    render(<LocationAndDate city="Dallas, TX" />);

    const locationPin = screen.getByAltText(/location pin/i);
    const city = screen.getByText(/dallas, tx/i);
    const date = screen.getByText(/wednesday, oct 5, 2022/i);

    expect(locationPin).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
