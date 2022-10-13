import React from "react";

function Header() {
  return (
    <h1 className="title sm:text-2xl xl:text-4xl tracking-[0.3rem] text-black/50 font-outfit font-normal sm:pt-[25vh] md:pt-[25vh] lg:pt-[25vh] pb-[3vh] text-center">
      Weather <span className="font-bold">Forecast</span>
    </h1>
  );
}

export default Header;
