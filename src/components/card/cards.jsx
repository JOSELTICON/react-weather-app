import React from "react";

const Cards = ({weekday, temperature, icon}) => {
  return (
      <div className="flex flex-col hover:scale-110 p-4 cursor-pointer items-center bg-white/80 rounded-lg border shadow-md hover:bg-black/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <h5 className="mb-1 uppercase text-2xl font-bold tracking-tight text-black/60">
          {weekday}
        </h5>
        <img
          className="object-cover w-12 rounded-t-lg h-12"
          src={`icons/${icon}.png`}
          alt=""
        />
        <h5 className="text-2xl font-normal">{temperature}°</h5>
      </div>
  );
};

export default Cards;
