import React from "react";
import { render, screen } from "@testing-library/react";
import partlyCloudyIcon from "../../media/partlyCloudy.png";
import thunderstormsIcon from "../../media/thunderstorms.png";
import rainIcon from "../../media/rain.png";
import WeekForecast from "./weekForecast";

describe("<WeekForecast />", () => {
  test("renders correct day, icon, and temp", () => {
    render(
      <WeekForecast
        dailyForecasts={[
          {
            temp: 93,
            icon: partlyCloudyIcon,
            date: 1665014400,
            condition: "Partly Cloudy",
          },
          {
            temp: 32,
            icon: thunderstormsIcon,
            date: 1665114400,
            condition: "Thunderstorms",
          },
          {
            temp: 65,
            icon: rainIcon,
            date: 1665129400,
            condition: "Rain",
          },
        ]}
        tempIsCelsius={false}
      />
    );

    const wednesday = screen.getByText(/wed/i);
    const wedTemp = screen.getByText(/93°/i);
    const wedIcon = screen.getByAltText(/partly cloudy/i);
    expect(wednesday).toBeInTheDocument();
    expect(wedTemp).toBeInTheDocument();
    expect(wedIcon).toBeInTheDocument();

    const thursday = screen.getByText(/thu/i);
    const thuTemp = screen.getByText(/32°/i);
    const thuIcon = screen.getByAltText(/thunderstorms/i);
    expect(thursday).toBeInTheDocument();
    expect(thuTemp).toBeInTheDocument();
    expect(thuIcon).toBeInTheDocument();

    const friday = screen.getByText(/fri/i);
    const friTemp = screen.getByText(/32°/i);
    const friIcon = screen.getByAltText(/rain/i);
    expect(friday).toBeInTheDocument();
    expect(friTemp).toBeInTheDocument();
    expect(friIcon).toBeInTheDocument();
  });

  test("renders correct Celsius temperatures", () => {
    render(
      <WeekForecast
        dailyForecasts={[
          {
            temp: 93,
            icon: partlyCloudyIcon,
            date: 1665014400,
            condition: "Partly Cloudy",
          },
          {
            temp: 32,
            icon: thunderstormsIcon,
            date: 1665114400,
            condition: "Thunderstorms",
          },
          {
            temp: 65,
            icon: rainIcon,
            date: 1665129400,
            condition: "Rain",
          },
        ]}
        tempIsCelsius={true}
      />
    );

    const wedTemp = screen.getByText(/34°/i);
    expect(wedTemp).toBeInTheDocument();

    const thuTemp = screen.getByText(/0°/i);
    expect(thuTemp).toBeInTheDocument();

    const friTemp = screen.getByText(/19°/i);
    expect(friTemp).toBeInTheDocument();
  });
});
