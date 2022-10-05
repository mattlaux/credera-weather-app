/**
 *
 * @param celsiusTemp - Temperature in degrees Celsius
 * @returns Temperature in degreeds Fahrenheit
 */
const celsiusToFahrenheit = (celsiusTemp: number) => {
  return Math.floor(celsiusTemp * (9 / 5) + 32);
};

export default celsiusToFahrenheit;
