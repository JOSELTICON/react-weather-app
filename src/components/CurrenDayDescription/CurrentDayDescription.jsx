import React from "react";
import CurrentDatDescriptionItem from "./CurrentDatDescriptionItem";
import Icons from "../../helpers/Icons";

const CurrentDayDescription = ({forecast,forecastday}) => {
  return (
    <>
      <div className="lg:w-[70%] md:h-auto md:w-[70%] cursor-pointer w-full px-5 md:px-0">
        <img src={`${Icons(forecastday.weatherDescription)}.jpg`} alt="no image" className="md:absolute relative md:rounded-l-lg md:rounded-[0_16px_16px_0] rounded-[16px_16px_0_0] bg-cover bg-centen md:w-full md:h-full"/>
        <div className="relative md:text-1xl lg:text-2xl text-sm text-white flex flex-col justify-center md:opacity-0 opacity-100 hover:opacity-100 bg-black/50 w-full md:md:rounded-[0_16px_16px_0] md:h-full rounded-[0_0_16px_16px] mb-4 md:mb-0">
          {forecast.map((item)=> (
            <CurrentDatDescriptionItem {...item} key={item.name}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default CurrentDayDescription;
