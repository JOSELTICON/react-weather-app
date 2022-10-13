import React from "react";
import useForeCast from "../../hooks/useForecast";
import Errors from "../error/Errors";
import Forecast from "../Forecast/forecast";
import Form from "../Form/form";
import Loader from "../Loader/loader";

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForeCast();
  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <>
      {/* form */}
      {!forecast && (
        <div className="forms relative m-auto px-8 flex flex-col min-h-[30vh] justify-center items-center max-w-md bg-white/50 rounded-xl shadow-2xl border-opacity-50 border-teal-900 backdrop-blur-sm overflow-hidden z-10">
          {!isLoading && <Form submitSearch={onSubmit} />}
          {/* error */}
          {isError && <Errors message={isError} />}
          {/* loader */}
          {isLoading && <Loader />}
        </div>
      )}
      {/* forecast */}
      {forecast && <Forecast forecast={forecast}/>}
    </>
  );
};

export default Page;
