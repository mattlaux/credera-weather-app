import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./searchBar";

describe("<SearchBar />", () => {
  test("search bar only accepts letters and spaces", () => {
    render(<SearchBar handleInputSubmit={jest.fn} />);

    const input = screen.getByLabelText(/please enter a city name below/i);
    const submitButton = screen.getByRole("button", {
      name: /get weather data/i,
    });

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Invalid input with number
    userEvent.type(input, "dalla5");
    expect(submitButton).toBeDisabled();

    // Valid city name
    userEvent.clear(input);
    userEvent.type(input, "denver");
    userEvent.click(submitButton);
    expect(input).toHaveValue("");
  });
});
