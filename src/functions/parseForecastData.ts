import partlyCloudyIcon from "../media/partlyCloudy.png";
import thunderstormsIcon from "../media/thunderstorms.png";
import rainIcon from "../media/rain.png";
import drizzleIcon from "../media/drizzle.png";

type ForecastObject = {
  temp: number;
  icon: string;
  date: number;
  condition: string;
};

const parseForecastData = (
  temp: number,
  weatherId: number,
  date: number
): ForecastObject => {
  let weatherCondition: string;
  let icon: string;
  if (weatherId >= 200 && weatherId < 300) {
    weatherCondition = "Thunderstorms";
    icon = thunderstormsIcon;
  } else if (weatherId >= 300 && weatherId < 400) {
    weatherCondition = "Drizzle";
    icon = drizzleIcon;
  } else if (weatherId >= 500 && weatherId < 700) {
    weatherCondition = "Rain";
    icon = rainIcon;
  } else if (weatherId >= 700 && weatherId < 900) {
    weatherCondition = "Partly Cloudy";
    icon = partlyCloudyIcon;
  } else {
    weatherCondition = "Failed to Retrieve Conditions";
    icon = "Failed to Retrieve Conditions";
  }
  const forecastObject = {
    temp: temp,
    icon: icon,
    date: date,
    condition: weatherCondition,
  };
  return forecastObject;
};

export default parseForecastData;
