import React from "react";

const Cards = ({weekday, temperature, icon}) => {
  return (
      <div className="flex flex-col md:text-2xl dark:text-white/90 text-black/60 text-sm mx-2 mt-6 hover:scale-110 p-4 cursor-pointer items-center bg-white/80 rounded-lg border shadow-md hover:bg-black/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <h5 className="mb-1 uppercase font-bold tracking-tight">
          {weekday}
        </h5>
        <img
          className="object-cover md:w-12 w-10 h-10 rounded-t-lg md:h-12"
          src={`icons/${icon}.png`}
          alt=""
        />
        <h5 className="font-normal">{temperature}°</h5>
      </div>
  );
};

export default Cards;
