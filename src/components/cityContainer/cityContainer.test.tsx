import React from "react";
import { render, screen } from "@testing-library/react";
import CityContainer from "./cityContainer";
import server from "../../../mocks/server";
import networkErrorHandlers from "../../../mocks/networkErrorHandlers";

describe("<CityContainer />", () => {
  test("renders temperature toggle button", () => {
    render(<CityContainer tempIsCelsius={false} handleToggleTemp={jest.fn} />);

    const toggleTempButton = screen.getByRole("checkbox");
    expect(toggleTempButton).toBeInTheDocument();
  });

  test("renders loading state then current weather information", async () => {
    render(<CityContainer tempIsCelsius={false} handleToggleTemp={jest.fn} />);

    const loadingText = screen.getByText("Loading Weather Data");
    expect(loadingText).toBeInTheDocument();

    const temp = await screen.findByText(/88°/i);
    const icon = await screen.findByAltText(/Partly Cloudy/i);
    const condition = await screen.findByText(/partly cloudy/i);
    const windSpeed = await screen.findByText(/wind: 1mph/i);
    expect(temp).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(condition).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });

  test("renders error state when request fails", async () => {
    server.use(...networkErrorHandlers);
    render(<CityContainer tempIsCelsius={false} handleToggleTemp={jest.fn} />);

    const loadingText = screen.getByText("Loading Weather Data");
    expect(loadingText).toBeInTheDocument();

    const errorText = await screen.findByText(
      /Failed to retrieve current weather data from API/i
    );
    expect(errorText).toBeInTheDocument();
  });
});
