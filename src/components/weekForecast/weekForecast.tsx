import DayForecast from "../dayForecast/dayForecast";
import "./weekForecast.css";
import Col from "react-bootstrap/Col";

type ForecastObject = {
  temp: number;
  icon: string;
  date: number;
  condition: string;
};

type WeekForecastProps = {
  dailyForecasts: ForecastObject[];
  tempIsCelsius: boolean;
};

const WeekForecast = (props: WeekForecastProps) => {
  const dayForecasts = props.dailyForecasts.map((dayForecast) => (
    <Col key={dayForecast.date}>
      <DayForecast forecast={dayForecast} tempIsCelsius={props.tempIsCelsius} />
    </Col>
  ));

  return (
    <div className="weekForecast mt-5 mt-md-0">
      <section className="singleDayForecast d-md-flex">{dayForecasts}</section>
    </div>
  );
};

export default WeekForecast;
