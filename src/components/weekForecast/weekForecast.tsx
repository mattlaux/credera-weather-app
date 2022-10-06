import DayForecast from "../dayForecast/dayForecast";
import "./weekForecast.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type ForecastObject = {
  temp: number;
  icon: string;
  date: number;
  condition: string;
};

type WeekForecastProps = {
  dailyForecasts: ForecastObject[];
};

const WeekForecast = (props: WeekForecastProps) => {
  const dayForecasts = props.dailyForecasts.map((dayForecast) => (
    <Col key={dayForecast.date}>
      <DayForecast forecast={dayForecast} />
    </Col>
  ));

  return (
    <Container className="ps-4 pe-4">
      <Row className="weekForecast mx-auto">
        <section className="singleDayForecast d-md-flex align-items-center p-0">
          {dayForecasts}
        </section>
      </Row>
    </Container>
  );
};

export default WeekForecast;
