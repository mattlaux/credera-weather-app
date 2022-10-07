import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import domPurify from "dompurify";
import "./searchBar.css";
import validator from "validator";

type SearchBarProps = {
  handleInputSubmit: (arg0: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const [input, setInput] = useState("");
  const [inputValid, setInputValid] = useState(false);

  const validateInput = (input: string): void => {
    if (
      validator.isEmpty(input) ||
      !validator.isLength(input, { min: 1, max: 50 }) ||
      !validator.matches(input, /^[a-zA-Z .-]+$/i)
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.handleInputSubmit(input.toLowerCase());
    setInput("");
  };

  return (
    <Form
      onSubmit={handleOnSubmit}
      className="searchBar mx-auto text-center mt-md-3 mb-md-3"
      id="searchBar"
    >
      <Form.Group controlId="cityInput">
        <Form.Label className="text-white">
          Please enter a city name below
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="City Name"
          aria-describedby="inputHelp"
          value={input}
          onChange={(e) => {
            const sanitizedInput = domPurify.sanitize(e.target.value);
            validateInput(sanitizedInput);
            setInput(sanitizedInput);
          }}
        />
        <Form.Text className="text-light">
          Input can only consist of letters, periods, and dashes
        </Form.Text>
      </Form.Group>
      <Button
        variant="light"
        type="submit"
        className="mt-3"
        disabled={!inputValid}
      >
        Get Weather Data
      </Button>
    </Form>
  );
};

export default SearchBar;
