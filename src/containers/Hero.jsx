import React, { useState } from "react";
import { VideoCards } from "../components/VideoCards";
import { Searchbar } from "../components/Searchbar";
import { SidePanel } from "../components/SidePanel";
import { Link } from "react-router-dom";

export const Hero = ({ isTut }) => {
  console.log(isTut);
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/6 p-3 pt-2 overflow-auto">
          <SidePanel />
        </div>
        <div className="flex w-5/6 flex-col gap-4 overflow-auto">
          <div className="flex flex-row justify-center items-center">
            <div className="self-center w-3/4">
              <Searchbar />
            </div>
            <div
              className={`flex flex-row ${isTut === 0 ? "hidden" : "block"}`}
            >
              <Link to="/videoUpload">
                <button className="mt-3 me-3 w-[150px] h-[35px] border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:border-gray-700">
                  Upload Video
                </button>
              </Link>
              <Link to="/createCourse">
                <button className="mt-3 w-[150px] h-[35px] border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:border-gray-700">
                  Create Course
                </button>
              </Link>
            </div>
            <span className="self-center font-bold text-xl mt-2 cursor-pointer hover:underline underline-offset-2 ms-10 me-10">
              Logout
            </span>
          </div>
          <VideoCards />
          <VideoCards />
          <VideoCards />
        </div>
      </div>
    </>
  );
};
