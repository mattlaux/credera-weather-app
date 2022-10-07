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
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      if (req.url.searchParams.get("q") === "dallas") {
        return res(
          ctx.json({
            cod: "200",
            message: 0,
            cnt: 40,
            list: [
              {
                dt: 1665111600,
                main: {
                  temp: 83.19,
                  feels_like: 81.55,
                  temp_min: 82.36,
                  temp_max: 83.19,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 32,
                  temp_kf: 0.46,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 30,
                },
                wind: {
                  speed: 3.62,
                  deg: 232,
                  gust: 3.94,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 03:00:00",
              },
              {
                dt: 1665122400,
                main: {
                  temp: 80.74,
                  feels_like: 79.79,
                  temp_min: 79.3,
                  temp_max: 80.74,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 32,
                  temp_kf: 0.8,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 41,
                },
                wind: {
                  speed: 4.68,
                  deg: 34,
                  gust: 7.52,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 06:00:00",
              },
              {
                dt: 1665133200,
                main: {
                  temp: 75.81,
                  feels_like: 74.79,
                  temp_min: 75.81,
                  temp_max: 75.81,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 36,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 100,
                },
                wind: {
                  speed: 4.29,
                  deg: 43,
                  gust: 7.4,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 09:00:00",
              },
              {
                dt: 1665144000,
                main: {
                  temp: 73.2,
                  feels_like: 72.05,
                  temp_min: 73.2,
                  temp_max: 73.2,
                  pressure: 1022,
                  sea_level: 1022,
                  grnd_level: 1006,
                  humidity: 39,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 100,
                },
                wind: {
                  speed: 3.85,
                  deg: 96,
                  gust: 6.87,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 12:00:00",
              },
              {
                dt: 1665154800,
                main: {
                  temp: 77.72,
                  feels_like: 76.75,
                  temp_min: 77.72,
                  temp_max: 77.72,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1008,
                  humidity: 33,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 100,
                },
                wind: {
                  speed: 5.19,
                  deg: 47,
                  gust: 6.55,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-07 15:00:00",
              },
              {
                dt: 1665165600,
                main: {
                  temp: 86.16,
                  feels_like: 83.25,
                  temp_min: 86.16,
                  temp_max: 86.16,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 1008,
                  humidity: 24,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 72,
                },
                wind: {
                  speed: 9.24,
                  deg: 45,
                  gust: 10.27,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-07 18:00:00",
              },
              {
                dt: 1665176400,
                main: {
                  temp: 87.49,
                  feels_like: 84.33,
                  temp_min: 87.49,
                  temp_max: 87.49,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1006,
                  humidity: 23,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02d",
                  },
                ],
                clouds: {
                  all: 18,
                },
                wind: {
                  speed: 9.26,
                  deg: 38,
                  gust: 8.75,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-07 21:00:00",
              },
              {
                dt: 1665187200,
                main: {
                  temp: 84.36,
                  feels_like: 81.93,
                  temp_min: 84.36,
                  temp_max: 84.36,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 1006,
                  humidity: 26,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02d",
                  },
                ],
                clouds: {
                  all: 19,
                },
                wind: {
                  speed: 5.28,
                  deg: 38,
                  gust: 9.17,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 00:00:00",
              },
              {
                dt: 1665198000,
                main: {
                  temp: 77.79,
                  feels_like: 76.82,
                  temp_min: 77.79,
                  temp_max: 77.79,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 1008,
                  humidity: 33,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n",
                  },
                ],
                clouds: {
                  all: 18,
                },
                wind: {
                  speed: 8.52,
                  deg: 26,
                  gust: 19.75,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 03:00:00",
              },
              {
                dt: 1665208800,
                main: {
                  temp: 75.61,
                  feels_like: 74.57,
                  temp_min: 75.61,
                  temp_max: 75.61,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 1008,
                  humidity: 36,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 35,
                },
                wind: {
                  speed: 8.77,
                  deg: 20,
                  gust: 20.94,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 06:00:00",
              },
              {
                dt: 1665219600,
                main: {
                  temp: 73.71,
                  feels_like: 72.55,
                  temp_min: 73.71,
                  temp_max: 73.71,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1009,
                  humidity: 38,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 58,
                },
                wind: {
                  speed: 7.7,
                  deg: 36,
                  gust: 16.2,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 09:00:00",
              },
              {
                dt: 1665230400,
                main: {
                  temp: 71.46,
                  feels_like: 70.32,
                  temp_min: 71.46,
                  temp_max: 71.46,
                  pressure: 1025,
                  sea_level: 1025,
                  grnd_level: 1010,
                  humidity: 43,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 73,
                },
                wind: {
                  speed: 8.21,
                  deg: 78,
                  gust: 14.9,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 12:00:00",
              },
              {
                dt: 1665241200,
                main: {
                  temp: 71.24,
                  feels_like: 70.27,
                  temp_min: 71.24,
                  temp_max: 71.24,
                  pressure: 1028,
                  sea_level: 1028,
                  grnd_level: 1012,
                  humidity: 47,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 63,
                },
                wind: {
                  speed: 9.37,
                  deg: 81,
                  gust: 12.03,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 15:00:00",
              },
              {
                dt: 1665252000,
                main: {
                  temp: 76.75,
                  feels_like: 75.87,
                  temp_min: 76.75,
                  temp_max: 76.75,
                  pressure: 1026,
                  sea_level: 1026,
                  grnd_level: 1011,
                  humidity: 37,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 76,
                },
                wind: {
                  speed: 5.68,
                  deg: 97,
                  gust: 7.05,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 18:00:00",
              },
              {
                dt: 1665262800,
                main: {
                  temp: 78.48,
                  feels_like: 77.58,
                  temp_min: 78.48,
                  temp_max: 78.48,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1008,
                  humidity: 33,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 97,
                },
                wind: {
                  speed: 6.53,
                  deg: 49,
                  gust: 6.55,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 21:00:00",
              },
              {
                dt: 1665273600,
                main: {
                  temp: 77.13,
                  feels_like: 76.14,
                  temp_min: 77.13,
                  temp_max: 77.13,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 1008,
                  humidity: 34,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 66,
                },
                wind: {
                  speed: 4.63,
                  deg: 49,
                  gust: 8.01,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 00:00:00",
              },
              {
                dt: 1665284400,
                main: {
                  temp: 73.54,
                  feels_like: 72.43,
                  temp_min: 73.54,
                  temp_max: 73.54,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1009,
                  humidity: 39,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n",
                  },
                ],
                clouds: {
                  all: 13,
                },
                wind: {
                  speed: 4.85,
                  deg: 45,
                  gust: 10.76,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 03:00:00",
              },
              {
                dt: 1665295200,
                main: {
                  temp: 70.92,
                  feels_like: 69.67,
                  temp_min: 70.92,
                  temp_max: 70.92,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1009,
                  humidity: 42,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n",
                  },
                ],
                clouds: {
                  all: 12,
                },
                wind: {
                  speed: 4.54,
                  deg: 106,
                  gust: 9.33,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 06:00:00",
              },
              {
                dt: 1665306000,
                main: {
                  temp: 68.05,
                  feels_like: 66.67,
                  temp_min: 68.05,
                  temp_max: 68.05,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1008,
                  humidity: 45,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 8,
                },
                wind: {
                  speed: 5.99,
                  deg: 132,
                  gust: 11.81,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 09:00:00",
              },
              {
                dt: 1665316800,
                main: {
                  temp: 66.42,
                  feels_like: 65.01,
                  temp_min: 66.42,
                  temp_max: 66.42,
                  pressure: 1025,
                  sea_level: 1025,
                  grnd_level: 1009,
                  humidity: 48,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 37,
                },
                wind: {
                  speed: 4.61,
                  deg: 138,
                  gust: 8.1,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 12:00:00",
              },
              {
                dt: 1665327600,
                main: {
                  temp: 71.76,
                  feels_like: 70.61,
                  temp_min: 71.76,
                  temp_max: 71.76,
                  pressure: 1026,
                  sea_level: 1026,
                  grnd_level: 1010,
                  humidity: 42,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02d",
                  },
                ],
                clouds: {
                  all: 12,
                },
                wind: {
                  speed: 6.26,
                  deg: 154,
                  gust: 9.24,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 15:00:00",
              },
              {
                dt: 1665338400,
                main: {
                  temp: 81.82,
                  feels_like: 80.53,
                  temp_min: 81.82,
                  temp_max: 81.82,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1009,
                  humidity: 32,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d",
                  },
                ],
                clouds: {
                  all: 37,
                },
                wind: {
                  speed: 4.5,
                  deg: 185,
                  gust: 6.06,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 18:00:00",
              },
              {
                dt: 1665349200,
                main: {
                  temp: 86.04,
                  feels_like: 83.53,
                  temp_min: 86.04,
                  temp_max: 86.04,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 1006,
                  humidity: 28,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 80,
                },
                wind: {
                  speed: 0.74,
                  deg: 227,
                  gust: 3.02,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 21:00:00",
              },
              {
                dt: 1665360000,
                main: {
                  temp: 83.37,
                  feels_like: 81.61,
                  temp_min: 83.37,
                  temp_max: 83.37,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 31,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 79,
                },
                wind: {
                  speed: 4.54,
                  deg: 133,
                  gust: 7.07,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 00:00:00",
              },
              {
                dt: 1665370800,
                main: {
                  temp: 78.82,
                  feels_like: 78.82,
                  temp_min: 78.82,
                  temp_max: 78.82,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 1006,
                  humidity: 36,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 100,
                },
                wind: {
                  speed: 6.02,
                  deg: 130,
                  gust: 13.24,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 03:00:00",
              },
              {
                dt: 1665381600,
                main: {
                  temp: 74.66,
                  feels_like: 73.65,
                  temp_min: 74.66,
                  temp_max: 74.66,
                  pressure: 1022,
                  sea_level: 1022,
                  grnd_level: 1006,
                  humidity: 39,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 100,
                },
                wind: {
                  speed: 6.51,
                  deg: 158,
                  gust: 16.51,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 06:00:00",
              },
              {
                dt: 1665392400,
                main: {
                  temp: 73.18,
                  feels_like: 72.09,
                  temp_min: 73.18,
                  temp_max: 73.18,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 1006,
                  humidity: 40,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 83,
                },
                wind: {
                  speed: 7.72,
                  deg: 170,
                  gust: 18.48,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 09:00:00",
              },
              {
                dt: 1665403200,
                main: {
                  temp: 71.42,
                  feels_like: 70.23,
                  temp_min: 71.42,
                  temp_max: 71.42,
                  pressure: 1022,
                  sea_level: 1022,
                  grnd_level: 1007,
                  humidity: 42,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 80,
                },
                wind: {
                  speed: 5.12,
                  deg: 181,
                  gust: 9.69,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 12:00:00",
              },
              {
                dt: 1665414000,
                main: {
                  temp: 73.92,
                  feels_like: 72.95,
                  temp_min: 73.92,
                  temp_max: 73.92,
                  pressure: 1024,
                  sea_level: 1024,
                  grnd_level: 1008,
                  humidity: 41,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 94,
                },
                wind: {
                  speed: 5.39,
                  deg: 178,
                  gust: 8.21,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 15:00:00",
              },
              {
                dt: 1665424800,
                main: {
                  temp: 85.51,
                  feels_like: 83.3,
                  temp_min: 85.51,
                  temp_max: 85.51,
                  pressure: 1022,
                  sea_level: 1022,
                  grnd_level: 1007,
                  humidity: 30,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 61,
                },
                wind: {
                  speed: 3.74,
                  deg: 191,
                  gust: 5.79,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 18:00:00",
              },
              {
                dt: 1665435600,
                main: {
                  temp: 89.06,
                  feels_like: 86.04,
                  temp_min: 89.06,
                  temp_max: 89.06,
                  pressure: 1019,
                  sea_level: 1019,
                  grnd_level: 1004,
                  humidity: 25,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 3,
                },
                wind: {
                  speed: 3.53,
                  deg: 139,
                  gust: 6.4,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 21:00:00",
              },
              {
                dt: 1665446400,
                main: {
                  temp: 85.68,
                  feels_like: 83.12,
                  temp_min: 85.68,
                  temp_max: 85.68,
                  pressure: 1019,
                  sea_level: 1019,
                  grnd_level: 1004,
                  humidity: 27,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 6,
                },
                wind: {
                  speed: 6.08,
                  deg: 142,
                  gust: 11.34,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 00:00:00",
              },
              {
                dt: 1665457200,
                main: {
                  temp: 80.1,
                  feels_like: 79.39,
                  temp_min: 80.1,
                  temp_max: 80.1,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 32,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 8,
                },
                wind: {
                  speed: 8.7,
                  deg: 151,
                  gust: 23.02,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 03:00:00",
              },
              {
                dt: 1665468000,
                main: {
                  temp: 76.26,
                  feels_like: 75.24,
                  temp_min: 76.26,
                  temp_max: 76.26,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 35,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 10,
                },
                wind: {
                  speed: 8.05,
                  deg: 170,
                  gust: 21.5,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 06:00:00",
              },
              {
                dt: 1665478800,
                main: {
                  temp: 72.88,
                  feels_like: 71.6,
                  temp_min: 72.88,
                  temp_max: 72.88,
                  pressure: 1019,
                  sea_level: 1019,
                  grnd_level: 1004,
                  humidity: 37,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 31,
                },
                wind: {
                  speed: 5.57,
                  deg: 177,
                  gust: 14.63,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 09:00:00",
              },
              {
                dt: 1665489600,
                main: {
                  temp: 70.25,
                  feels_like: 68.99,
                  temp_min: 70.25,
                  temp_max: 70.25,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 43,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 31,
                },
                wind: {
                  speed: 6.8,
                  deg: 179,
                  gust: 16.87,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 12:00:00",
              },
              {
                dt: 1665500400,
                main: {
                  temp: 74.59,
                  feels_like: 73.53,
                  temp_min: 74.59,
                  temp_max: 74.59,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 1006,
                  humidity: 38,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 91,
                },
                wind: {
                  speed: 7.72,
                  deg: 181,
                  gust: 12.86,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 15:00:00",
              },
              {
                dt: 1665511200,
                main: {
                  temp: 83.62,
                  feels_like: 81.36,
                  temp_min: 83.62,
                  temp_max: 83.62,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 1005,
                  humidity: 26,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 94,
                },
                wind: {
                  speed: 8.95,
                  deg: 163,
                  gust: 13.58,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 18:00:00",
              },
              {
                dt: 1665522000,
                main: {
                  temp: 87.93,
                  feels_like: 84.61,
                  temp_min: 87.93,
                  temp_max: 87.93,
                  pressure: 1016,
                  sea_level: 1016,
                  grnd_level: 1001,
                  humidity: 22,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 83,
                },
                wind: {
                  speed: 9.42,
                  deg: 162,
                  gust: 14.03,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 21:00:00",
              },
              {
                dt: 1665532800,
                main: {
                  temp: 84.7,
                  feels_like: 81.99,
                  temp_min: 84.7,
                  temp_max: 84.7,
                  pressure: 1015,
                  sea_level: 1015,
                  grnd_level: 1000,
                  humidity: 23,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 90,
                },
                wind: {
                  speed: 6.35,
                  deg: 156,
                  gust: 14.16,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-12 00:00:00",
              },
            ],
            city: {
              id: 4684904,
              name: "Dallas",
              coord: {
                lat: 32.7668,
                lon: -96.7836,
              },
              country: "US",
              population: 2368139,
              timezone: -18000,
              sunrise: 1665059073,
              sunset: 1665101138,
            },
          })
        );
      } else if (req.url.searchParams.get("q") === "denver") {
        return res(
          ctx.json({
            cod: "200",
            message: 0,
            cnt: 40,
            list: [
              {
                dt: 1665122400,
                main: {
                  temp: 60.6,
                  feels_like: 58.33,
                  temp_min: 60.6,
                  temp_max: 61.2,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 849,
                  humidity: 42,
                  temp_kf: -0.33,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 73,
                },
                wind: {
                  speed: 5.68,
                  deg: 312,
                  gust: 13.27,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 06:00:00",
              },
              {
                dt: 1665133200,
                main: {
                  temp: 55.96,
                  feels_like: 53.65,
                  temp_min: 53.8,
                  temp_max: 55.96,
                  pressure: 1025,
                  sea_level: 1025,
                  grnd_level: 849,
                  humidity: 51,
                  temp_kf: 1.2,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 38,
                },
                wind: {
                  speed: 13.09,
                  deg: 331,
                  gust: 18.79,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 09:00:00",
              },
              {
                dt: 1665144000,
                main: {
                  temp: 46.85,
                  feels_like: 42.28,
                  temp_min: 46.85,
                  temp_max: 46.85,
                  pressure: 1029,
                  sea_level: 1029,
                  grnd_level: 849,
                  humidity: 68,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n",
                  },
                ],
                clouds: {
                  all: 12,
                },
                wind: {
                  speed: 9.6,
                  deg: 1,
                  gust: 12.39,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-07 12:00:00",
              },
              {
                dt: 1665154800,
                main: {
                  temp: 47.7,
                  feels_like: 45.37,
                  temp_min: 47.7,
                  temp_max: 47.7,
                  pressure: 1030,
                  sea_level: 1030,
                  grnd_level: 850,
                  humidity: 57,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 2,
                },
                wind: {
                  speed: 5.21,
                  deg: 16,
                  gust: 4.7,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-07 15:00:00",
              },
              {
                dt: 1665165600,
                main: {
                  temp: 56.44,
                  feels_like: 53.76,
                  temp_min: 56.44,
                  temp_max: 56.44,
                  pressure: 1027,
                  sea_level: 1027,
                  grnd_level: 851,
                  humidity: 42,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 3,
                },
                wind: {
                  speed: 4.41,
                  deg: 52,
                  gust: 2.93,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-07 18:00:00",
              },
              {
                dt: 1665176400,
                main: {
                  temp: 62.6,
                  feels_like: 60.26,
                  temp_min: 62.6,
                  temp_max: 62.6,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 850,
                  humidity: 36,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 57,
                },
                wind: {
                  speed: 6.44,
                  deg: 23,
                  gust: 5.55,
                },
                visibility: 10000,
                pop: 0.12,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-07 21:00:00",
              },
              {
                dt: 1665187200,
                main: {
                  temp: 61.63,
                  feels_like: 59.27,
                  temp_min: 61.63,
                  temp_max: 61.63,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 849,
                  humidity: 38,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 75,
                },
                wind: {
                  speed: 7.18,
                  deg: 26,
                  gust: 5.41,
                },
                visibility: 10000,
                pop: 0.2,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 00:00:00",
              },
              {
                dt: 1665198000,
                main: {
                  temp: 57.22,
                  feels_like: 54.81,
                  temp_min: 57.22,
                  temp_max: 57.22,
                  pressure: 1026,
                  sea_level: 1026,
                  grnd_level: 850,
                  humidity: 46,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n",
                  },
                ],
                clouds: {
                  all: 21,
                },
                wind: {
                  speed: 5.21,
                  deg: 65,
                  gust: 5.48,
                },
                visibility: 10000,
                pop: 0.28,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 03:00:00",
              },
              {
                dt: 1665208800,
                main: {
                  temp: 55.56,
                  feels_like: 53.22,
                  temp_min: 55.56,
                  temp_max: 55.56,
                  pressure: 1025,
                  sea_level: 1025,
                  grnd_level: 849,
                  humidity: 51,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 32,
                },
                wind: {
                  speed: 2.24,
                  deg: 30,
                  gust: 2.1,
                },
                visibility: 10000,
                pop: 0.05,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 06:00:00",
              },
              {
                dt: 1665219600,
                main: {
                  temp: 53.46,
                  feels_like: 51.08,
                  temp_min: 53.46,
                  temp_max: 53.46,
                  pressure: 1025,
                  sea_level: 1025,
                  grnd_level: 849,
                  humidity: 55,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 1,
                },
                wind: {
                  speed: 4.43,
                  deg: 18,
                  gust: 5.73,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 09:00:00",
              },
              {
                dt: 1665230400,
                main: {
                  temp: 50.86,
                  feels_like: 48.47,
                  temp_min: 50.86,
                  temp_max: 50.86,
                  pressure: 1026,
                  sea_level: 1026,
                  grnd_level: 848,
                  humidity: 60,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 1,
                },
                wind: {
                  speed: 4.16,
                  deg: 13,
                  gust: 4.99,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-08 12:00:00",
              },
              {
                dt: 1665241200,
                main: {
                  temp: 53.89,
                  feels_like: 51.42,
                  temp_min: 53.89,
                  temp_max: 53.89,
                  pressure: 1026,
                  sea_level: 1026,
                  grnd_level: 850,
                  humidity: 52,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 0.89,
                  deg: 96,
                  gust: 1.1,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 15:00:00",
              },
              {
                dt: 1665252000,
                main: {
                  temp: 63,
                  feels_like: 60.64,
                  temp_min: 63,
                  temp_max: 63,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 850,
                  humidity: 35,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 2,
                },
                wind: {
                  speed: 3.74,
                  deg: 80,
                  gust: 3.58,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 18:00:00",
              },
              {
                dt: 1665262800,
                main: {
                  temp: 68.52,
                  feels_like: 66.29,
                  temp_min: 68.52,
                  temp_max: 68.52,
                  pressure: 1019,
                  sea_level: 1019,
                  grnd_level: 848,
                  humidity: 26,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 5,
                },
                wind: {
                  speed: 6.33,
                  deg: 55,
                  gust: 5.26,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-08 21:00:00",
              },
              {
                dt: 1665273600,
                main: {
                  temp: 65.86,
                  feels_like: 63.55,
                  temp_min: 65.86,
                  temp_max: 65.86,
                  pressure: 1019,
                  sea_level: 1019,
                  grnd_level: 847,
                  humidity: 30,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02d",
                  },
                ],
                clouds: {
                  all: 12,
                },
                wind: {
                  speed: 8.32,
                  deg: 67,
                  gust: 7.87,
                },
                visibility: 10000,
                pop: 0.04,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 00:00:00",
              },
              {
                dt: 1665284400,
                main: {
                  temp: 62.1,
                  feels_like: 59.74,
                  temp_min: 62.1,
                  temp_max: 62.1,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 848,
                  humidity: 37,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                  },
                ],
                clouds: {
                  all: 51,
                },
                wind: {
                  speed: 1.9,
                  deg: 131,
                  gust: 2.19,
                },
                visibility: 10000,
                pop: 0.04,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 03:00:00",
              },
              {
                dt: 1665295200,
                main: {
                  temp: 59.38,
                  feels_like: 56.84,
                  temp_min: 59.38,
                  temp_max: 59.38,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 847,
                  humidity: 39,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                  },
                ],
                clouds: {
                  all: 28,
                },
                wind: {
                  speed: 3.6,
                  deg: 181,
                  gust: 4.65,
                },
                visibility: 10000,
                pop: 0.01,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 06:00:00",
              },
              {
                dt: 1665306000,
                main: {
                  temp: 56.75,
                  feels_like: 54.05,
                  temp_min: 56.75,
                  temp_max: 56.75,
                  pressure: 1021,
                  sea_level: 1021,
                  grnd_level: 846,
                  humidity: 41,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 3.67,
                  deg: 211,
                  gust: 5.03,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 09:00:00",
              },
              {
                dt: 1665316800,
                main: {
                  temp: 55.22,
                  feels_like: 52.38,
                  temp_min: 55.22,
                  temp_max: 55.22,
                  pressure: 1022,
                  sea_level: 1022,
                  grnd_level: 846,
                  humidity: 41,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 2.04,
                  deg: 239,
                  gust: 2.35,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-09 12:00:00",
              },
              {
                dt: 1665327600,
                main: {
                  temp: 59.32,
                  feels_like: 56.52,
                  temp_min: 59.32,
                  temp_max: 59.32,
                  pressure: 1023,
                  sea_level: 1023,
                  grnd_level: 848,
                  humidity: 33,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 2.19,
                  deg: 212,
                  gust: 2.48,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 15:00:00",
              },
              {
                dt: 1665338400,
                main: {
                  temp: 68.47,
                  feels_like: 66.09,
                  temp_min: 68.47,
                  temp_max: 68.47,
                  pressure: 1020,
                  sea_level: 1020,
                  grnd_level: 849,
                  humidity: 23,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 4.03,
                  deg: 90,
                  gust: 3.24,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 18:00:00",
              },
              {
                dt: 1665349200,
                main: {
                  temp: 72.88,
                  feels_like: 70.66,
                  temp_min: 72.88,
                  temp_max: 72.88,
                  pressure: 1017,
                  sea_level: 1017,
                  grnd_level: 847,
                  humidity: 17,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 4.9,
                  deg: 68,
                  gust: 3.65,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-09 21:00:00",
              },
              {
                dt: 1665360000,
                main: {
                  temp: 71.11,
                  feels_like: 68.77,
                  temp_min: 71.11,
                  temp_max: 71.11,
                  pressure: 1016,
                  sea_level: 1016,
                  grnd_level: 846,
                  humidity: 18,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 6.08,
                  deg: 58,
                  gust: 6.17,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 00:00:00",
              },
              {
                dt: 1665370800,
                main: {
                  temp: 64.74,
                  feels_like: 62.19,
                  temp_min: 64.74,
                  temp_max: 64.74,
                  pressure: 1018,
                  sea_level: 1018,
                  grnd_level: 846,
                  humidity: 27,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 1,
                },
                wind: {
                  speed: 2.48,
                  deg: 112,
                  gust: 5.57,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 03:00:00",
              },
              {
                dt: 1665381600,
                main: {
                  temp: 61.66,
                  feels_like: 58.98,
                  temp_min: 61.66,
                  temp_max: 61.66,
                  pressure: 1018,
                  sea_level: 1018,
                  grnd_level: 845,
                  humidity: 31,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 0,
                },
                wind: {
                  speed: 3.49,
                  deg: 245,
                  gust: 4.9,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 06:00:00",
              },
              {
                dt: 1665392400,
                main: {
                  temp: 58.82,
                  feels_like: 55.96,
                  temp_min: 58.82,
                  temp_max: 58.82,
                  pressure: 1018,
                  sea_level: 1018,
                  grnd_level: 844,
                  humidity: 33,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 2,
                },
                wind: {
                  speed: 4.09,
                  deg: 207,
                  gust: 5.26,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 09:00:00",
              },
              {
                dt: 1665403200,
                main: {
                  temp: 56.7,
                  feels_like: 53.85,
                  temp_min: 56.7,
                  temp_max: 56.7,
                  pressure: 1018,
                  sea_level: 1018,
                  grnd_level: 844,
                  humidity: 38,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 4,
                },
                wind: {
                  speed: 4.14,
                  deg: 216,
                  gust: 5.26,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-10 12:00:00",
              },
              {
                dt: 1665414000,
                main: {
                  temp: 61.05,
                  feels_like: 58.32,
                  temp_min: 61.05,
                  temp_max: 61.05,
                  pressure: 1018,
                  sea_level: 1018,
                  grnd_level: 845,
                  humidity: 31,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 5,
                },
                wind: {
                  speed: 3.44,
                  deg: 222,
                  gust: 4.47,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 15:00:00",
              },
              {
                dt: 1665424800,
                main: {
                  temp: 71.38,
                  feels_like: 69.12,
                  temp_min: 71.38,
                  temp_max: 71.38,
                  pressure: 1015,
                  sea_level: 1015,
                  grnd_level: 845,
                  humidity: 19,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                  },
                ],
                clouds: {
                  all: 7,
                },
                wind: {
                  speed: 2.64,
                  deg: 61,
                  gust: 1.86,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 18:00:00",
              },
              {
                dt: 1665435600,
                main: {
                  temp: 75.31,
                  feels_like: 73.2,
                  temp_min: 75.31,
                  temp_max: 75.31,
                  pressure: 1011,
                  sea_level: 1011,
                  grnd_level: 843,
                  humidity: 14,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                clouds: {
                  all: 51,
                },
                wind: {
                  speed: 4.92,
                  deg: 78,
                  gust: 3.31,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-10 21:00:00",
              },
              {
                dt: 1665446400,
                main: {
                  temp: 73.2,
                  feels_like: 70.93,
                  temp_min: 73.2,
                  temp_max: 73.2,
                  pressure: 1010,
                  sea_level: 1010,
                  grnd_level: 842,
                  humidity: 15,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d",
                  },
                ],
                clouds: {
                  all: 33,
                },
                wind: {
                  speed: 4.12,
                  deg: 67,
                  gust: 5.21,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 00:00:00",
              },
              {
                dt: 1665457200,
                main: {
                  temp: 66.69,
                  feels_like: 64.24,
                  temp_min: 66.69,
                  temp_max: 66.69,
                  pressure: 1011,
                  sea_level: 1011,
                  grnd_level: 841,
                  humidity: 25,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n",
                  },
                ],
                clouds: {
                  all: 17,
                },
                wind: {
                  speed: 5.03,
                  deg: 206,
                  gust: 7.4,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 03:00:00",
              },
              {
                dt: 1665468000,
                main: {
                  temp: 62.91,
                  feels_like: 60.26,
                  temp_min: 62.91,
                  temp_max: 62.91,
                  pressure: 1011,
                  sea_level: 1011,
                  grnd_level: 840,
                  humidity: 29,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 10,
                },
                wind: {
                  speed: 3.47,
                  deg: 230,
                  gust: 3.67,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 06:00:00",
              },
              {
                dt: 1665478800,
                main: {
                  temp: 60.13,
                  feels_like: 57.25,
                  temp_min: 60.13,
                  temp_max: 60.13,
                  pressure: 1011,
                  sea_level: 1011,
                  grnd_level: 839,
                  humidity: 30,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 6,
                },
                wind: {
                  speed: 4.7,
                  deg: 230,
                  gust: 6.67,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 09:00:00",
              },
              {
                dt: 1665489600,
                main: {
                  temp: 58.32,
                  feels_like: 55.31,
                  temp_min: 58.32,
                  temp_max: 58.32,
                  pressure: 1011,
                  sea_level: 1011,
                  grnd_level: 839,
                  humidity: 31,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                  },
                ],
                clouds: {
                  all: 8,
                },
                wind: {
                  speed: 4.85,
                  deg: 219,
                  gust: 5.77,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-11 12:00:00",
              },
              {
                dt: 1665500400,
                main: {
                  temp: 62.71,
                  feels_like: 59.95,
                  temp_min: 62.71,
                  temp_max: 62.71,
                  pressure: 1012,
                  sea_level: 1012,
                  grnd_level: 840,
                  humidity: 27,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02d",
                  },
                ],
                clouds: {
                  all: 21,
                },
                wind: {
                  speed: 5.5,
                  deg: 231,
                  gust: 8.05,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 15:00:00",
              },
              {
                dt: 1665511200,
                main: {
                  temp: 74.21,
                  feels_like: 72.12,
                  temp_min: 74.21,
                  temp_max: 74.21,
                  pressure: 1009,
                  sea_level: 1009,
                  grnd_level: 841,
                  humidity: 17,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d",
                  },
                ],
                clouds: {
                  all: 49,
                },
                wind: {
                  speed: 6.11,
                  deg: 321,
                  gust: 10.96,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 18:00:00",
              },
              {
                dt: 1665522000,
                main: {
                  temp: 69.69,
                  feels_like: 67.62,
                  temp_min: 69.69,
                  temp_max: 69.69,
                  pressure: 1008,
                  sea_level: 1008,
                  grnd_level: 839,
                  humidity: 27,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                clouds: {
                  all: 82,
                },
                wind: {
                  speed: 10.54,
                  deg: 187,
                  gust: 12.37,
                },
                visibility: 10000,
                pop: 0.2,
                rain: {
                  "3h": 0.12,
                },
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-11 21:00:00",
              },
              {
                dt: 1665532800,
                main: {
                  temp: 70.2,
                  feels_like: 68.14,
                  temp_min: 70.2,
                  temp_max: 70.2,
                  pressure: 1008,
                  sea_level: 1008,
                  grnd_level: 839,
                  humidity: 26,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                clouds: {
                  all: 91,
                },
                wind: {
                  speed: 9.01,
                  deg: 136,
                  gust: 12.24,
                },
                visibility: 10000,
                pop: 0.29,
                rain: {
                  "3h": 0.19,
                },
                sys: {
                  pod: "d",
                },
                dt_txt: "2022-10-12 00:00:00",
              },
              {
                dt: 1665543600,
                main: {
                  temp: 63.59,
                  feels_like: 61.48,
                  temp_min: 63.59,
                  temp_max: 63.59,
                  pressure: 1011,
                  sea_level: 1011,
                  grnd_level: 840,
                  humidity: 39,
                  temp_kf: 0,
                },
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                  },
                ],
                clouds: {
                  all: 62,
                },
                wind: {
                  speed: 6.55,
                  deg: 204,
                  gust: 13.47,
                },
                visibility: 10000,
                pop: 0.21,
                rain: {
                  "3h": 0.2,
                },
                sys: {
                  pod: "n",
                },
                dt_txt: "2022-10-12 03:00:00",
              },
            ],
            city: {
              id: 5419384,
              name: "Denver",
              coord: {
                lat: 39.7392,
                lon: -104.9847,
              },
              country: "US",
              population: 600158,
              timezone: -21600,
              sunrise: 1665061255,
              sunset: 1665102892,
            },
          })
        );
      }
    }
  ),
];

export default handlers;
