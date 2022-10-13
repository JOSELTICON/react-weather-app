import React from "react";
import Icons from "../../helpers/Icons";
const CurrenDay = ({
  weekdate,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => {
  return (
    <>
        <div className="flex text-5xl flex-col font-semibold tracking-widest">
          <h1 className="uppercase">{weekdate}</h1>
          <h1 className="py-4 uppercase">{date}</h1>
          <div className="locations flex flex-row items-center">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <h3 className="text-3xl font-light">{location}</h3>
          </div>
        </div>
        <div className="display flex flex-row justify-around">
          <h1 className="text-[200px] font-sans text-[#b6cdbd]">
            {temperature}°
          </h1>
          <img
            className="object-cover object-center w-[230px] rounded-t-lg"
            src={`${Icons(weatherDescription)}.svg`}
            alt="no image"
          />
        </div>
    </>
  );
};

export default CurrenDay;
