import React, { useState } from "react";

const Form = ({submitSearch}) => {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;
    submitSearch(location);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full px-5"
    >
      <div className="relative z-1 mb-8 mt-4 w-full group">
        <input
          type="text"
          name="floating_location"
          id="floating_location"
          className="block py-2.5 px-0 w-full text-2xl text-black/60 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-800 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
          placeholder=" "
          required
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <label className="peer-focus:font-medium absolute text-2xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">
          Buscar ubicación
        </label>
      </div>
      <button
        onClick={onSubmit}
        type="submit"
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 w-full"
      >
      <svg className="mr-4 -ml-1 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        BUSCAR
      </button>
    </form>
  );
};

export default Form;
