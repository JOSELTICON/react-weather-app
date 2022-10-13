import React from "react";
import Cards from "../card/cards";
const CurrentDaysForecastItems = ({ days }) => {
  return (
    <div className="flex flex-row justify-between">
      {days.map((day) => (
        <Cards {...day} key={day.weekday} />
      ))}
    </div>
  );
};

export default CurrentDaysForecastItems;
