import partlyCloudyIcon from "../media/partlyCloudy.png";
import thunderstormsIcon from "../media/thunderstorms.png";
import rainIcon from "../media/rain.png";
import drizzleIcon from "../media/drizzle.png";

type WeatherObject = {
  conditions: string;
  icon: string;
  windSpeed: number;
};

const parseWeatherData = (
  weatherId: number,
  windSpeed: number
): WeatherObject => {
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
  const weatherObject = {
    conditions: weatherCondition,
    icon: icon,
    windSpeed: windSpeed,
  };
  return weatherObject;
};

export default parseWeatherData;
