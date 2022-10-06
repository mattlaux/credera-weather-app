import "./cityContainer.css";
import { useState } from "react";
import TempToggle from "../tempToggle/tempToggle";
import CurrentWeather from "../currentWeather/currentWeather";
import partlyCloudyIcon from "../../media/partlyCloudy.png";

type CityContainerProps = {
  tempIsCelsius: boolean;
  handleToggleTemp: () => void;
};

const CityContainer = (props: CityContainerProps): JSX.Element => {
  const [temp, setTemp] = useState(93);
  const [weatherObject, setConditions] = useState({
    conditions: "Partly Cloudy",
    icon: partlyCloudyIcon,
    windSpeed: 12,
  });

  return (
    <div className="cityBackground mt-md-4">
      <div className="d-md-flex flex-row align-items-center justify-content-between ps-5 pe-5 pt-2">
        <CurrentWeather
          temp={temp}
          tempIsCelsius={props.tempIsCelsius}
          weatherObject={weatherObject}
        />
        <div className="tempTogglePosition">
          <TempToggle handleToggleTemp={props.handleToggleTemp} />
        </div>
      </div>
    </div>
  );
};

export default CityContainer;
