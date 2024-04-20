import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather  w-[350px] shadow-2xl text-white bg-gray-800 mt-6 m-auto rounded-lg  py-3 px-5 justify-between ">
      <div className="top flex justify-between  items-center">
        <div>
          <p className="city font-semibold text-lg leading-9">{data.city}</p>
          <p className="wheather-description font-normal text-sm leading-3 m-0">
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className="weather-icon w-28 invert"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom  flex justify-between  items-center">
        <p className="temperature font-semibold text-7xl w-auto tracking-tighter my-3 ">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="details w-full pl-5 ">
          <div className="parameter-row  flex justify-between">
            <span className="parameter-label border-b-2 ">Details</span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label  text-left font-normal text-xs">
              Feels Like
            </span>
            <span className="parameter-value text-left font-bold text-xs  ">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label  text-left font-normal text-xs">
              Wind
            </span>
            <span className="parameter-value text-left font-bold text-xs  ">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label  text-left font-normal text-xs">
              Humidity
            </span>
            <span className="parameter-value text-left font-bold text-xs  ">
              {Math.round(data.main.humidity)}%
            </span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label  text-left font-normal text-xs">
              Pressure
            </span>
            <span className="parameter-value text-left font-bold text-xs  ">
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

// #######################################################################
