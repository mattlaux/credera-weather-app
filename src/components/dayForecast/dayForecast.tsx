import "./dayForecast.css";
import fahrenheitToCelsius from "../../functions/fahrenheitToCelsius";

type DailyForecast = {
  temp: number;
  icon: string;
  date: number;
  condition: string;
};

type DayForecastProps = {
  forecast: DailyForecast;
  tempIsCelsius: boolean;
  fetchDataError: string;
};

const DayForecast = (props: DayForecastProps): JSX.Element => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(props.forecast.date * 1000);
  const day = weekdays[date.getDay()];
  return (
    <section className="dayForecast d-flex flex-md-column align-items-center justify-content-around p-1 bg-white">
      <h3 className="fw-bold mb-0 mb-md-2 mt-md-2">{day}</h3>
      <img
        src={props.forecast.icon}
        alt={props.forecast.condition}
        className="mb-md-2"
      />
      {props.fetchDataError === "" ? (
        <p>
          {props.tempIsCelsius
            ? fahrenheitToCelsius(props.forecast.temp)
            : props.forecast.temp}
          °
        </p>
      ) : (
        <p>{props.fetchDataError}</p>
      )}
    </section>
  );
};

export default DayForecast;
