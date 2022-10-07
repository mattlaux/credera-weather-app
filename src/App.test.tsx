import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import server from "../mocks/server";
import networkErrorHandlers from "../mocks/networkErrorHandlers";

describe("<App />", () => {
  test("renders necessary components", async () => {
    render(<App />);

    const loadingText = screen.getByText(/loading weekly forecast/i);
    expect(loadingText).toBeInTheDocument();

    const locationAndDate = await screen.findByText(/dallas, tx/i);
    const currentWeather = await screen.findByText(/wind:/i);
    const tempToggle = await screen.findByRole("checkbox");
    const weekForecast = await screen.findByText(/fri/i);

    expect(locationAndDate).toBeInTheDocument();
    expect(currentWeather).toBeInTheDocument();
    expect(tempToggle).toBeInTheDocument();
    expect(weekForecast).toBeInTheDocument();
  });

  test("toggling temp button changes temperature in currentWeather and weekForecast", async () => {
    render(<App />);

    let currentTemp = await screen.findByText(/88/i);
    let satTemp = await screen.findByText(/78/i);

    expect(currentTemp).toBeInTheDocument();
    expect(satTemp).toBeInTheDocument();

    const tempToggle = screen.getByRole("checkbox");
    userEvent.click(tempToggle);

    expect(currentTemp).toHaveTextContent("32°");
    expect(satTemp).toHaveTextContent("26°");
  });

  test("renders error state when request fails", async () => {
    server.use(...networkErrorHandlers);
    render(<App />);

    const errorText = await screen.findByText(
      /Failed to retrieve weather forecast data from API/i
    );
    expect(errorText).toBeInTheDocument();
  });
});
