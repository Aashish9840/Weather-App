import React, { useContext, useEffect, useState } from "react";
import Forecast from "../Routes/Forecast";
import { ApiData } from "../Store/Data";
export const Fetch = ({ fetchstate, inputval }) => {
  const { setresponse } = useContext(ApiData);
  useEffect(() => {
    if (!fetchstate) {
      return;
    }
    const datafetch = async (location) => {
      const API_KEY = "d7acfcc3241ae778f54cdc9a4d09a3cd";
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        const result = await data.json();
        setresponse(result);
      } catch (error) {
        alert;
      }
    };
    datafetch(inputval);
  }, [fetchstate]);
  return <div></div>;
};
