import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Fetch } from "./Fetch";

export const MainContent = ({ value, front }) => {
  const [fetchstate, setfetch] = useState(false);
  const [inputval, setinputval] = useState("");
  const handleApi = () => {
    if (inputval == "") {
      alert("Empty location");
    } else {
      value(false);
      setfetch(true);
    }
  };
  const handleinput = (inp) => {
    setinputval(inp);
    console.log(inputval);
  };
  return (
    <>
      {front && (
        <div className="flex-grow flex flex-col justify-center items-center">
          <div>
            <h1 className="text-white text-3xl font-bold mb-4">
              The Only Weather Forecast You Need
            </h1>
            <hr className="border-white font-black border-2 rounded-lg w-2/5 mx-auto" />
          </div>
          <div className="flex justify-between bg-stone-500 px-2 rounded-md w-1/5 py-1 mt-7 cursor-pointer">
            <input
              type="text"
              className="rounded-none outline-none text-white bg-transparent flex-grow "
              placeholder="Enter Location"
              value={inputval}
              onChange={(e) => handleinput(e.target.value)}
            />
            <Link to="/search">
              <SearchIcon sx={{ color: "white" }} onClick={() => handleApi()} />
            </Link>
          </div>
        </div>
      )}
      {!front && <Fetch fetchstate={fetchstate} inputval={inputval} />}
    </>
  );
};
