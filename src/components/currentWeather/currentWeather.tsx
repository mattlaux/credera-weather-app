import "./currentWeather.css";
import fahrenheitToCelsius from "../../functions/fahrenheitToCelsius";

type WeatherObject = {
  conditions: string;
  icon: string;
  windSpeed: number;
};

type CurrentWeatherProps = {
  temp: number;
  tempIsCelsius: boolean;
  weatherObject: WeatherObject;
};

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
  return (
    <section className="currentWeatherWidget d-flex flex-column flex-md-row align-items-center mt-3 mt-md-0">
      <h2>
        {props.tempIsCelsius ? fahrenheitToCelsius(props.temp) : props.temp}°
      </h2>
      <img
        src={props.weatherObject.icon}
        alt={props.weatherObject.conditions}
        className="ms-1 d-none d-md-block"
      />
      <div className="d-flex flex-column ms-md-3 fw-light">
        <em>{props.weatherObject.conditions}</em>
        <em>Wind: {props.weatherObject.windSpeed}mph</em>
      </div>
    </section>
  );
};

export default CurrentWeather;
