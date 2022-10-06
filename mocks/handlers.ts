import { rest } from "msw";

const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      return res(
        ctx.json({
          coord: {
            lon: -96.7836,
            lat: 32.7668,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          base: "stations",
          main: {
            temp: 88.81,
            feels_like: 86.23,
            temp_min: 86.02,
            temp_max: 92.73,
            pressure: 1020,
            humidity: 28,
          },
          visibility: 10000,
          wind: {
            speed: 1.99,
            deg: 347,
            gust: 3,
          },
          clouds: {
            all: 9,
          },
          dt: 1665085986,
          sys: {
            type: 2,
            id: 2075302,
            country: "US",
            sunrise: 1665059073,
            sunset: 1665101138,
          },
          timezone: -18000,
          id: 4684904,
          name: "Dallas",
          cod: 200,
        })
      );
    }
  ),
];

export default handlers;
