import { useState } from "react";
import axios from "axios";
import { weatherApiOptions, WEATHER_API_URL } from "../services/api";
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import currentDayForecast from "../helpers/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const useForeCast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getDay = async (location) => {
    const { data } = await axios(
      `${WEATHER_API_URL}/weather?q=${location}`,
      weatherApiOptions
    ).catch(() => {
      setLoading(false);
      setError("No se encontro la ubicación");
    });
    return data;
  };
  const getForecast = async (location) => {
    const { data } = await axios(
      `${WEATHER_API_URL}/forecast?q=${location}`,
      weatherApiOptions
    ).catch(() => {
      setLoading(false);
      setError("No se encontro la Ubicación");
    });
    return data;
  };
  const gatherForecastData = (response,data) => {
    const currentDay = getCurrentDayForecast(response, response.name);
    const currentDayDetails = currentDayForecast(response);
    const getUpcomingDays = getUpcomingDaysForecast(data.list);
    setForecast({currentDay,currentDayDetails, getUpcomingDays});
    setLoading(false);
  };
  //call API
  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);
    const response = await getDay(location);
    const data = await getForecast(location);
    gatherForecastData(response,data);
  };
  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};
export default useForeCast;
