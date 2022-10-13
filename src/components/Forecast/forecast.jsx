import React from "react";
import CurrentDayDescription from "../CurrenDayDescription/CurrentDayDescription";
import CurrentDaysForecastItems from "../CurrenDayDescription/CurrentDaysForecastItems";
import CurrenDay from "../CurrentDay/CurrenDay";

// 38:19
const Forecast = ({ forecast }) => {
  return (
    <div className="App relative font-outfit text-black/60 flex flex-row font-poppin max-w-[1200px] bg-white/50 backdrop-blur-2xl m-auto min-h-[80vh] rounded-2xl shadow-2xl border-2 border-opacity-50 -mt-[22vh] border-white overflow-hidden">
      <div className="flex flex-col justify-center leading-normal w-full px-20">
        <CurrenDay {...forecast.currentDay} />
        <CurrentDaysForecastItems days={forecast.getUpcomingDays}/>
      </div>
      <CurrentDayDescription forecast={forecast.currentDayDetails} forecastday={forecast.currentDay} />
    </div>
  );
};

export default Forecast;
