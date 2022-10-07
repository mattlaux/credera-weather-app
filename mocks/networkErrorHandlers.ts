import { rest } from "msw";

const networkErrorHandlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];

export default networkErrorHandlers;
