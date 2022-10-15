import React from "react";

function Header({animation}) {
  console.log(animation)
  return (
    <h1 className={`title sm:text-3xl md:text-4xl text-3xl xl:text-4xl ${animation} tracking-[0.3rem] text-black/50 font-outfit font-normal px-2 text-center`}>
      Weather <span className="font-bold">Forecast</span>
    </h1>
  );
}

export default Header;
