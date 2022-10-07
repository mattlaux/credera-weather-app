import "./cityContainer.css";
import { useState, useEffect } from "react";
import TempToggle from "../tempToggle/tempToggle";
import CurrentWeather from "../currentWeather/currentWeather";
import parseWeatherData from "../../functions/parseWeatherData";

type CityContainerProps = {
  tempIsCelsius: boolean;
  handleToggleTemp: () => void;
  cityName: string;
};

const CityContainer = (props: CityContainerProps): JSX.Element => {
  const [temp, setTemp] = useState(NaN);
  const [weatherObject, setWeatherObject] = useState({
    conditions: "",
    icon: "",
    windSpeed: NaN,
  });
  const [status, setStatus] = useState("Loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=60a23522e4542e1b670c3d203b56d9ae&units=imperial`
        );
        if (!res.ok) {
          throw new Error("Failed to retrieve current weather data from API");
        }
        const data = await res.json();
        setTemp(Math.floor(data.main.temp));
        const apiWeatherId = data.weather[0].id;
        const apiWindSpeed = Math.floor(data.wind.speed);
        const weatherData = parseWeatherData(apiWeatherId, apiWindSpeed);
        setWeatherObject(weatherData);
        setStatus("Successful");
      } catch (err) {
        setStatus("Error");
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to retrieve current weather data from API");
        }
      }
    };
    fetchCurrentWeather();
  }, [props.cityName]);

  return (
    <div className="cityBackground mt-md-4">
      <div className="d-md-flex flex-row align-items-center justify-content-between ps-5 pe-5 pt-2">
        {status === "Loading" && <p>Loading Weather Data</p>}
        {status === "Error" && <p>{error}</p>}
        {status === "Successful" && (
          <CurrentWeather
            temp={temp}
            tempIsCelsius={props.tempIsCelsius}
            weatherObject={weatherObject}
          />
        )}
        <div className="tempTogglePosition">
          <TempToggle
            handleToggleTemp={props.handleToggleTemp}
            tempIsCelsius={props.tempIsCelsius}
          />
        </div>
      </div>
    </div>
  );
};

export default CityContainer;
