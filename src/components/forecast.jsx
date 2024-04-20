import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title  text-2xl font-bold ">Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item bg-slate-200 rounded-xl h-12 m-2 items-center flex cursor-pointer text-xs py-1 px-5 text-black">
                  <img
                    alt="weather"
                    className="icon-small w-10 "
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day text-gray-950 flex-1 font-semibold ml-4">
                    {forecastDays[idx]}
                  </label>
                  <label className="description flex-1 mr-3 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max text-gray-800 font-bold">
                    {Math.round(item.main.temp_min)}°C-
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid grid grid-cols-2 grid-rows-5 flex-1 py-1 px-4 ">
                <div className="daily-details-grid-items items-center flex h-8 justify-between mr-5">
                  <label className="text-gray-800 ">Pressure:</label>
                  <label className="font-bold text-black">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-items items-center flex h-8 justify-between mr-5">
                  <label className="text-gray-800 ">Humidity:</label>
                  <label className="font-bold text-black">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="daily-details-grid-items items-center flex h-8 justify-between mr-5">
                  <label className="text-gray-800 ">Clouds:</label>
                  <label className="font-bold text-black">
                    {item.clouds.all}%
                  </label>
                </div>
                <div className="daily-details-grid-items items-center flex h-8 justify-between mr-5">
                  <label className="text-gray-800 ">Wind speed:</label>
                  <label className="font-bold text-black">
                    {item.wind.speed}m/s
                  </label>
                </div>
                <div className="daily-details-grid-items items-center flex h-8 justify-between mr-5">
                  <label className="text-gray-800 ">Sea level:</label>
                  <label className="font-bold text-black">
                    {item.main.sea_level} m
                  </label>
                </div>
                <div className="daily-details-grid-items items-center flex h-8 justify-between mr-5">
                  <label className="text-gray-800 ">Feels like:</label>
                  <label className="font-bold text-black">
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
