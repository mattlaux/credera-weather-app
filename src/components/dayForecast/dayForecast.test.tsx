import React from "react";
import { render, screen } from "@testing-library/react";
import partlyCloudyIcon from "../../media/partlyCloudy.png";
import thunderstormsIcon from "../../media/thunderstorms.png";
import rainIcon from "../../media/rain.png";
import drizzleIcon from "../../media/drizzle.png";
import DayForecast from "./dayForecast";

describe("<DayForecast />", () => {
  test("renders correct day, icon, and temp", () => {
    render(
      <DayForecast
        forecast={{
          temp: 93,
          icon: partlyCloudyIcon,
          date: 1665014400,
          condition: "Partly Cloudy",
        }}
        tempIsCelsius={false}
      />
    );

    const day = screen.getByText(/wed/i);
    const temp = screen.getByText(/93°/i);
    const weatherIcon = screen.getByAltText(/partly cloudy/i);

    expect(day).toBeInTheDocument();
    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
  });

  test("renders thunderstorms icon with a temp of 0 degrees celsius", () => {
    render(
      <DayForecast
        forecast={{
          temp: 32,
          icon: thunderstormsIcon,
          date: 1665129400,
          condition: "Thunderstorms",
        }}
        tempIsCelsius={true}
      />
    );

    const temp = screen.getByText(/0°/i);
    const weatherIcon = screen.getByAltText(/thunderstorms/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
  });

  test("renders rain icon with a temp of -55 degrees Celsius", () => {
    render(
      <DayForecast
        forecast={{
          temp: -67,
          icon: rainIcon,
          date: 1665129400,
          condition: "Rain",
        }}
        tempIsCelsius={true}
      />
    );

    const temp = screen.getByText(/-55°/i);
    const weatherIcon = screen.getByAltText(/rain/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
  });

  test("renders drizzle icon", () => {
    render(
      <DayForecast
        forecast={{
          temp: 65,
          icon: drizzleIcon,
          date: 1665129400,
          condition: "Drizzle",
        }}
        tempIsCelsius={false}
      />
    );

    const temp = screen.getByText(/65°/i);
    const weatherIcon = screen.getByAltText(/drizzle/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
  });
});
