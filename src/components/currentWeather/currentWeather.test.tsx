import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentWeather from "./currentWeather";
import partlyCloudyIcon from "../../media/partlyCloudy.png";
import thunderstormsIcon from "../../media/thunderstorms.png";
import rainIcon from "../../media/rain.png";
import drizzleIcon from "../../media/drizzle.png";

describe("<CurrentWeather />", () => {
  test("renders temp, partly cloudy condition icon, weather condition, and wind speed", () => {
    render(
      <CurrentWeather
        temp={93}
        tempIsCelsius={false}
        weatherObject={{
          conditions: "Partly Cloudy",
          icon: partlyCloudyIcon,
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

  test("renders thunderstorms icon with a temp of 2 degrees celsius", () => {
    render(
      <CurrentWeather
        temp={34}
        tempIsCelsius={true}
        weatherObject={{
          conditions: "Thunderstorms",
          icon: thunderstormsIcon,
          windSpeed: 4,
        }}
      />
    );

    const temp = screen.getByText(/2°/i);
    const weatherIcon = screen.getByAltText(/thunderstorms/i);
    const weatherCondition = screen.getByText(/thunderstorms/i);
    const windSpeed = screen.getByText(/wind: 4mph/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });

  test("renders rain icon with a temp of -17 degrees celsius", () => {
    render(
      <CurrentWeather
        temp={0}
        tempIsCelsius={true}
        weatherObject={{
          conditions: "Rain",
          icon: rainIcon,
          windSpeed: 12,
        }}
      />
    );

    const temp = screen.getByText(/-17°/i);
    const weatherIcon = screen.getByAltText(/rain/i);
    const weatherCondition = screen.getByText(/rain/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
  });

  test("renders drizzle icon", () => {
    render(
      <CurrentWeather
        temp={43}
        tempIsCelsius={false}
        weatherObject={{
          conditions: "Drizzle",
          icon: drizzleIcon,
          windSpeed: 12,
        }}
      />
    );

    const temp = screen.getByText(/43°/i);
    const weatherIcon = screen.getByAltText(/drizzle/i);
    const weatherCondition = screen.getByText(/drizzle/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherCondition).toBeInTheDocument();
  });
});
