import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export const Header = ({ value }) => {
  return (
    <>
      <div className="flex mt-5 mx-10 px-4 pb-5 justify-between">
        <div>
          <h1 className="text-white font-medium text-3xl">forecast</h1>
        </div>
        <div className="mr-[70px]">
          <ul className="flex justify-between text-[18px] ">
            <li className="text-white font-normal mr-5 cursor-pointer">Home</li>
            <li className="text-white font-normal mr-5 cursor-pointer">
              ForecastDetails
            </li>
            <li className="text-white font-normal mr-5">
              <Link
                to="/"
                onClick={() => {
                  value(false); // Update the state when clicking "Search"
                }}
              >
                <SearchIcon sx={{ fontSize: "32px" }} />
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};
