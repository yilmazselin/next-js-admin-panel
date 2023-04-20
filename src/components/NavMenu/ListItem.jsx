import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ListItem = ({ menu }) => {
  const [isActive, setIsActive] = useState("");

  const menuHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <li key={menu.id}>
      <button
        onClick={menuHandler}
        className="relative flex w-full flex-row items-center h-11 focus:outline-none justify-between hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="flex items-center ml-2 text-sm tracking-wide truncate">
          {menu.name}
        </span>
        <ChevronRightIcon
          className={`h-4 w-4 ${isActive ? "transform rotate-90" : ""}`}
          aria-hidden="true"
        />
      </button>
      {isActive ? (
        <ul>
          {menu.subMenu.map((e, i) => (
            <li
              key={e.route}
              className="relative flex w-full flex-row items-center focus:outline-none justify-between hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 my-2"
            >
              <Link
                className="flex items-center ml-2 text-sm tracking-wide truncate"
                href={`/${e.route}`}
              >
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default ListItem;
