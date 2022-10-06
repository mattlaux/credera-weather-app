import "./dayForecast.css";

type DailyForecast = {
  temp: number;
  icon: string;
  date: number;
  condition: string;
};

type DayForecastProps = {
  forecast: DailyForecast;
};

const DayForecast = (props: DayForecastProps): JSX.Element => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(props.forecast.date * 1000);
  const day = weekdays[date.getDay()];
  return (
    <section className="dayForecast d-flex flex-md-column align-items-center justify-content-around p-1">
      <h3 className="fw-bold mb-0 mb-md-3">{day}</h3>
      <img
        src={props.forecast.icon}
        alt={props.forecast.condition}
        className="mb-md-3"
      />
      <p className="mb-0">{props.forecast.temp}°</p>
    </section>
  );
};

export default DayForecast;
