import moment from "moment";
const time = new Date();

const getCurrentDayForecast = (response, title) => ({
  // weekdate: moment.utc(time).seconds(response.timezone).format("dddd"),
  // date: moment.utc(time).seconds(response.timezone).format("MMMM Do"),
  weekdate: moment.utc(time).seconds(response.timezone).format("ddd D"),
  date: moment.utc(time).seconds(response.timezone).format("MMMM"),
  location: title,
  temperature: Math.round(response.main.temp),
  weatherIcon: response.weather[0].icon,
  weatherDescription: response.weather[0].main,
});
export default getCurrentDayForecast;