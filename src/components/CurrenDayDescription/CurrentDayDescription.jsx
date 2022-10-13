import React from "react";
import CurrentDatDescriptionItem from "./CurrentDatDescriptionItem";
import Icons from "../../helpers/Icons";

const CurrentDayDescription = ({forecast,forecastday}) => {
  return (
    <>
    {console.log(forecastday.weatherDescription)}
      <div className={`flex lg:w-[70%] md:h-auto md:w-[40%] cursor-pointer`}>
        <img src={`${Icons(forecastday.weatherDescription)}.jpg`} alt="no image" className="absolute md:rounded-none md:rounded-l-lg xl:rounded-[0_16px_16px_0] bg-cover w-full h-full bg-center"/>
        <div className="relative text-2xl text-white flex flex-col justify-center opacity-0 hover:opacity-100 bg-black/50 overflow-hidden w-full">
          {forecast.map((item)=> (
            <CurrentDatDescriptionItem {...item} key={item.name}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default CurrentDayDescription;
