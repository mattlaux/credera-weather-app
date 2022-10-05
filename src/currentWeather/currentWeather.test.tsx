import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentWeather from "./currentWeather";
import partlyCloudyIcon from "../media/partlyCloudy.png";
import thunderstormsIcon from "../media/thunderstorms.png";
import rainIcon from "../media/rain.png";
import drizzleIcon from "../media/drizzle.png";

describe("<CurrentWeather />", () => {
  test("renders temp, partly cloudy condition icon, weather condition, and wind speed", () => {
    render(
      <CurrentWeather
        temp={93}
        weatherObject={{
          conditions: "Partly Cloudy",
          iconPath: partlyCloudyIcon,
          windSpeed: 12,
        }}
      />
    );

    const temp = screen.getByText(/93°/i);
    const weatherIcon = screen.getByAltText(/partly cloudy/i);
    const weatherCondition = screen.getByText(/partly cloudy/i);
    const windSpeed = screen.getByText(/wind: 12mph/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });

  test("renders thunderstorms icon", () => {
    render(
      <CurrentWeather
        temp={34}
        weatherObject={{
          conditions: "Thunderstorms",
          iconPath: thunderstormsIcon,
          windSpeed: 4,
        }}
      />
    );

    const temp = screen.getByText(/34°/i);
    const weatherIcon = screen.getByAltText(/thunderstorms/i);
    const weatherCondition = screen.getByText(/thunderstorms/i);
    const windSpeed = screen.getByText(/wind: 4mph/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });

  test("renders rain icon", () => {
    render(
      <CurrentWeather
        temp={93}
        weatherObject={{
          conditions: "Rain",
          iconPath: rainIcon,
          windSpeed: 12,
        }}
      />
    );

    const weatherIcon = screen.getByAltText(/rain/i);
    const weatherCondition = screen.getByText(/rain/i);

    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
  });

  test("renders drizzle icon", () => {
    render(
      <CurrentWeather
        temp={93}
        weatherObject={{
          conditions: "Drizzle",
          iconPath: drizzleIcon,
          windSpeed: 12,
        }}
      />
    );

    const weatherIcon = screen.getByAltText(/drizzle/i);
    const weatherCondition = screen.getByText(/drizzle/i);

    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
  });
});
