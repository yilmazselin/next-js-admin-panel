import React, { useEffect, useState } from "react";
import { asideMenu } from "../utils/options";
import ListItem from "./NavMenu/ListItem";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen md:flex  flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className=" flex flex-col top-0 left-0 w-64 bg-white h-screen border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>Page Title</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Main
                </div>
              </div>
            </li>
            {asideMenu.map((menu, index) => (
              <ListItem key={menu.id} menu={menu} />
            ))}
          </ul>
        </div>
      </div>
      <div className="main-content w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
