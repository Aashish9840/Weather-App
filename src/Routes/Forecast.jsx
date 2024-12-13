import React, { useContext } from "react";
import { ApiData } from "../Store/Data";

const Forecast = () => {
  const { response } = useContext(ApiData);
  if (!response || !response.main || !response.weather) {
    return (
      <p className="mt-16 text-center text-bold text-3xl text-white">
        Loading data...
      </p>
    );
  }
  console.log(response.main.name);

  return (
    <div className="bg-slate-800 min-h-9/10 flex p-5 flex-col w-screen px-4 text-white">
      <div>
        <h1 className="text-center text-2xl font-semibold">
          <span className="text-3xl text-red-500 font-bold mr-1">
            {response.name}
          </span>
          Temperature Status
        </h1>
      </div>
      <div className="flex mx-auto justify-around w-auto h-auto px-1 py-[2px] mt-5 bg-gray-400 rounded-3xl">
        <div className="mr-8 px-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold">{response.main.temp}°</p>
          <p className="text-[14px] mt-6 font-medium">
            {response.weather[0].description}
          </p>
          <p className="text-[16px] font-medium">{response.name} City</p>
        </div>
        {response.main.temp > 25 ? (
          <div className="relative">
            <img src="../images/cloud1.webp" alt="" />
            <p className="absolute top-[120px] right-[50px] text-[14px] font-normal">
              Mild Cold
            </p>
          </div>
        ) : (
          <div className="relative">
            <img src="../images/rain_cloud1.webp" alt="" />
          </div>
        )}
      </div>
      <div className="flex justify-around mt-7 w-3/5 mx-auto h-[180px]">
        <div className="mr-10 flex justify-center items-center rounded-3xl bg-transparent">
          <img
            src="../images/wind.jpeg"
            alt=""
            className="h-3/5 object-cover mb-2 mr-5 rounded-2xl"
          />
          <h1 className="font-semibold text=[15px]">
            {response.wind.speed}m/s Wind Speed
          </h1>
        </div>
        <div className="flex justify-center items-center rounded-3xl bg-transparent">
          <img
            src="../images/Humidity.webp"
            alt=""
            className="h-4/5 object-cover rounded-2xl mb-2 mr-5"
          />
          <h1 className="font-semibold text=[15px]">
            {response.main.humidity}g/m3 Humidity
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
