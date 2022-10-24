import React, { useState, useEffect } from "react";
import "./App.css";
import CityContainer from "./components/cityContainer/cityContainer";
import WeekForecast from "./components/weekForecast/weekForecast";
import partlyCloudyIcon from "./media/partlyCloudy.png";
import LocationAndDate from "./components/locationAndDate/locationAndDate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import parseForecastData from "./functions/parseForecastData";
import failIcon from "./media/failIcon.svg";
import SearchBar from "./components/searchBar/searchBar";

type ForecastObject = {
  temp: number;
  icon: string;
  date: number;
  condition: string;
};

function App() {
  const [tempIsCelsius, setTempIsCelsius] = useState(false);
  const [dailyForecasts, setDailyForecasts] = useState([
    {
      temp: 45,
      icon: partlyCloudyIcon,
      date: 1665014400,
      condition: "Partly Cloudy",
    },
  ]);
  const [status, setStatus] = useState("Loading");
  const [error, setError] = useState("");
  const [cityName, setCityName] = useState("dallas");

  useEffect(() => {
    const fetch5DayForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
        );
        if (!res.ok) {
          throw new Error("Failed to retrieve weather forecast data from API");
        }
        const data = await res.json();
        const forecastsArray: ForecastObject[] = [];
        for (let i = 6; i <= 38; i += 8) {
          const forecast = data.list[i];
          const temp = Math.floor(forecast.main.temp);
          const weatherId = forecast.weather[0].id;
          const date = forecast.dt;
          forecastsArray.push(parseForecastData(temp, weatherId, date));
        }
        setDailyForecasts(forecastsArray);
        setError("");
        setStatus("Successful");
      } catch (err) {
        setStatus("Error");
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to retrieve weather forecast data from API");
        }
        setDailyForecasts([
          {
            temp: NaN,
            icon: failIcon,
            date: NaN,
            condition: "Failed to load data",
          },
        ]);
      }
    };
    fetch5DayForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const handleToggleTemp = () => {
    setTempIsCelsius(!tempIsCelsius);
  };

  const handleInputSubmit = (userInput: string) => {
    setCityName(userInput);
  };

  return (
    <Container className="mainBackground" fluid>
      <Row className="d-flex flex-column flex-md-row align-content-center vh-100">
        <Col xs={10} md={8} className="mx-auto">
          <main>
            <SearchBar handleInputSubmit={handleInputSubmit} />
            <LocationAndDate city={cityName} />
            <CityContainer
              tempIsCelsius={tempIsCelsius}
              handleToggleTemp={handleToggleTemp}
              cityName={cityName}
            />
            {status === "Loading" && <p>Loading Weekly Forecast</p>}
            {status === "Error" && (
              <WeekForecast
                dailyForecasts={dailyForecasts}
                tempIsCelsius={tempIsCelsius}
                fetchDataError={error}
              />
            )}
            {status === "Successful" && (
              <WeekForecast
                dailyForecasts={dailyForecasts}
                tempIsCelsius={tempIsCelsius}
                fetchDataError={error}
              />
            )}
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
