const currentDayForecast = (data) => [
  {
    name: "cloudiness",
    value: data.clouds.all,
    unit: '%',
  },
  {
    name: "humidity",
    value: data.main.humidity,
    unit: '%',
  },
  {
    name: "wind",
    value: data.wind.speed,
    unit: 'Km/h'
  },
  {
    name: "air pressure",
    value: data.main.pressure,
    unit: 'mb'
  },
  {
    name: "max temp",
    value: Math.round(data.main.temp_max),
    unit: '°C'
  },
  {
    name: "min temp",
    value: Math.round(data.main.temp_max),
    unit: '°C',
  },
];
export default currentDayForecast;