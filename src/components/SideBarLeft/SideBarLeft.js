import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faUser } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="flex flex-col items-center bg-slate-100 pt-10 w-15 h-screen">
      <button className="logo">P</button>

      <div className="border border-green-800 mt-32 flex flex-col">
        <FontAwesomeIcon className="text-slate-500" icon={faSlidersH} />
        <FontAwesomeIcon className="text-slate-500" icon={faUser} />
        <p>B</p>
        <p>C</p>
        <p>D</p>
      </div>
    </div>
  );
}

export default SideBar;
