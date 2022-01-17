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
    <div className="flex flex-col items-center bg-slate-100 pt-10 w-15 h-screen">
      <button className="logo">P</button>

      <div className="mt-32 flex flex-col justify-between h-72">
        <FontAwesomeIcon
          className="text-slate-500"
          icon={faSlidersH}
          size="lg"
        />
        <FontAwesomeIcon className="text-slate-500" icon={faCubes} size="lg" />
        <FontAwesomeIcon className="text-slate-500" icon={faUser} size="lg" />
        <FontAwesomeIcon className="text-slate-500" icon={faWrench} size="lg" />
      </div>
    </div>
  );
}

export default SideBar;
