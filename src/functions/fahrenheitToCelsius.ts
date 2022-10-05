/**
 *
 * @param fahrenheitTemp - Temperature in degrees Fahrenheit
 * @returns Temperature in degrees Celsius
 */
const fahrenheitToCelsius = (fahrenheitTemp: number) => {
  return Math.ceil((fahrenheitTemp - 32) * (5 / 9));
};

export default fahrenheitToCelsius;
