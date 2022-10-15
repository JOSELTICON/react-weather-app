import React from "react";
import useForeCast from "../../hooks/useForecast";
import Errors from "../error/Errors";
import Forecast from "../Forecast/forecast";
import Form from "../Form/form";
import Loader from "../Loader/loader";
import Header from "../Header/header";

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForeCast();
  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <>
      {/* form */}
      {!forecast && (
        <div className="flex pt-[22vh] justify-center items-center">
          <div className="flex px-8 flex-col min-h-[40vh] sm:min-h-[40vh] md:min-h-[50vh] justify-evenly items-center max-w-xs md:max-w-md xl:max-w-md lg:max-w-md bg-white/50 rounded-xl shadow-2xl border-opacity-50 border-teal-900 backdrop-blur-sm overflow-hidden z-10">
            {!isLoading ? <Header animation="none"/> : <Header animation="animate-bounce"/>}
            {!isLoading && <Form submitSearch={onSubmit} />}
            {/* error */}
            {isError && <Errors message={isError} />}
            {/* loader */}
            {isLoading && <Loader />}
          </div>
        </div>
      )}
      {/* forecast */}
      {forecast && <Forecast forecast={forecast} />}
    </>
  );
};

export default Page;
