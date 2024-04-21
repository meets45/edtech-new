import React from "react";
import logo from "../assets/new_logo.png";
import { ChannelName } from "./ChannelName";
export const SidePanel = () => {
  return (
    <>
      <div className="h-screen w-1/6 fixed">
        <a
          href="/"
          className="flex items-center space-x-3 mt-4 rtl:space-x-reverse"
        >
          <img src={logo} className="h-[50px]" alt="Edtech" />
          <span className="self-center te xt-2xl font-semibold whitespace-nowrap text-black">
            EdTech
          </span>
        </a>
        <div className="mt-10 font-medium text-lg">Courses Enrolled</div>
        <ChannelName />
        <ChannelName />
        <ChannelName />
      </div>
    </>
  );
};
