import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faCubes,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function SideBar() {
  return (
    <div className="flex flex-col items-center bg-slate-100 pt-10 w-15 h-screen fixed">
      <button className="logo">P</button>

      <div className="mt-32 flex flex-col justify-between h-72">
        <div className="p-1 rounded-full">
          <FontAwesomeIcon
            className="text-slate-500 cursor-pointer"
            icon={faSlidersH}
            size="lg"
          />
        </div>
        <div className="bg-slate-300 shadow-lg p-1 rounded-full">
          <FontAwesomeIcon
            className="text-slate-500 cursor-pointer"
            icon={faCubes}
            size="lg"
          />
        </div>
        <div className="p-1 rounded-full">
          <FontAwesomeIcon
            className="text-slate-500 cursor-pointer"
            icon={faUser}
            size="lg"
          />
        </div>
        <div className="p-1 rounded-full">
          <FontAwesomeIcon
            className="text-slate-500 cursor-pointer"
            icon={faWrench}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
