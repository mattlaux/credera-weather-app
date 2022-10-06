import React, { useState } from "react";
import "./App.css";
import CityContainer from "./components/cityContainer/cityContainer";
import WeekForecast from "./components/weekForecast/weekForecast";
import partlyCloudyIcon from "./media/partlyCloudy.png";
import thunderstormsIcon from "./media/thunderstorms.png";
import rainIcon from "./media/rain.png";
import drizzleIcon from "./media/drizzle.png";
import LocationAndDate from "./components/locationAndDate/locationAndDate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [tempIsCelsius, setTempIsCelsius] = useState(false);
  const [dailyForecasts, setDailyForecast] = useState([
    {
      temp: 45,
      icon: partlyCloudyIcon,
      date: 1665014400,
      condition: "Partly Cloudy",
    },
    {
      temp: 78,
      icon: rainIcon,
      date: 1665114400,
      condition: "Rain",
    },
    {
      temp: 65,
      icon: thunderstormsIcon,
      date: 1665129400,
      condition: "Thunderstorms",
    },
    {
      temp: 32,
      icon: drizzleIcon,
      date: 1665283400,
      condition: "Drizzle",
    },
    {
      temp: -63,
      icon: rainIcon,
      date: 1665320400,
      condition: "Rain",
    },
  ]);

  const handleToggleTemp = () => {
    setTempIsCelsius(!tempIsCelsius);
  };

  return (
    <Container className="mainBackground" fluid>
      <Row className="d-flex flex-column flex-md-row align-content-center vh-100">
        <Col xs={10} md={8} className="mx-auto">
          <LocationAndDate city="Dallas, TX" />
          <CityContainer
            tempIsCelsius={tempIsCelsius}
            handleToggleTemp={handleToggleTemp}
          />
          <WeekForecast
            dailyForecasts={dailyForecasts}
            tempIsCelsius={tempIsCelsius}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
