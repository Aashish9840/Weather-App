import React, { createContext, useState } from "react";
export const ApiData = createContext();
export const Data = ({ children }) => {
  const [response, setresponse] = useState("");
  return (
    <ApiData.Provider value={{ response, setresponse }}>
      <div>{children}</div>
    </ApiData.Provider>
  );
};
