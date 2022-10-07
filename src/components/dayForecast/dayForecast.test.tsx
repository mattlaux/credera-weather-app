import React from "react";
import { render, screen } from "@testing-library/react";
import partlyCloudyIcon from "../../media/partlyCloudy.png";
import thunderstormsIcon from "../../media/thunderstorms.png";
import rainIcon from "../../media/rain.png";
import drizzleIcon from "../../media/drizzle.png";
import DayForecast from "./dayForecast";
import failIcon from "../../media/failIcon.svg";

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
        fetchDataError={""}
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
        fetchDataError={""}
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
        fetchDataError={""}
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
        fetchDataError={""}
      />
    );

    const temp = screen.getByText(/65°/i);
    const weatherIcon = screen.getByAltText(/drizzle/i);

    expect(temp).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
  });

  test("renders error message and fail icon if fetchDataError is not an empty string", () => {
    render(
      <DayForecast
        forecast={{
          temp: NaN,
          icon: failIcon,
          date: NaN,
          condition: "Failed to load data",
        }}
        tempIsCelsius={false}
        fetchDataError={"Failed to retrieve weather forecast data from API"}
      />
    );

    const weatherIcon = screen.getByAltText(/failed to load data/i);
    const errorMessage = screen.getByText(
      /failed to retrieve weather forecast data from API/i
    );

    expect(weatherIcon).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });
});
