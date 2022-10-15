import React from "react";
import CurrentDayDescription from "../CurrenDayDescription/CurrentDayDescription";
import CurrentDaysForecastItems from "../CurrenDayDescription/CurrentDaysForecastItems";
import CurrenDay from "../CurrentDay/CurrenDay";

// 38:19
const Forecast = ({ forecast }) => {
  return (
    <div className="md:pt-[10vh]">
      <div className="App relative font-outfit flex flex-col md:flex-row md:max-w-[1200px] md:m-auto md:min-h-[80vh] justify-center md:items-stretch items-center text-black/60 font-poppin max-w-[1200px] bg-white/50  dark:bg-red-400 backdrop-blur-2xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl shadow-2xl border-2 border-opacity-50 border-white overflow-hidden">
        <div className="flex flex-col justify-around items-center md:items-stretch leading-normal w-full px-20 lg:px-20 md:px-5 py-10 md:py-12">
          <CurrenDay {...forecast.currentDay} />
          <CurrentDaysForecastItems days={forecast.getUpcomingDays} />
        </div>
        <CurrentDayDescription
          forecast={forecast.currentDayDetails}
          forecastday={forecast.currentDay}
        />
      </div>
    </div>
  );
};

export default Forecast;
