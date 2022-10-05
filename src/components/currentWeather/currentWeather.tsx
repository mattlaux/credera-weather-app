import "./currentWeather.css";

type WeatherObject = {
  conditions: string;
  icon: string;
  windSpeed: number;
};

type CurrentWeatherProps = {
  temp: number;
  weatherObject: WeatherObject;
};

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
  return (
    <section className="currentWeatherWidget d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="d-flex align-items-center">
        <p className="mb-0">{props.temp}°</p>
        <img
          src={props.weatherObject.icon}
          alt={props.weatherObject.conditions}
          height={39.27}
          width={44.18}
          className="ms-1"
        />
      </div>
      <div className="d-flex flex-column ms-md-3">
        <em>{props.weatherObject.conditions}</em>
        <em>Wind: {props.weatherObject.windSpeed}mph</em>
      </div>
    </section>
  );
};

export default CurrentWeather;
