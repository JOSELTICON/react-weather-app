import React from "react";

const Errors = ({message="Ocurrio un Error"}) => {
  return (
    <div
      className="flex justify-center w-60 text-sm p-2 mt-5 text-white bg-red-500 rounded-lg dark:bg-red-400 dark:text-white"
      role="alert"
    >
      <svg aria-hidden="true" className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
      {message}
    </div>
  );
};

export default Errors;
