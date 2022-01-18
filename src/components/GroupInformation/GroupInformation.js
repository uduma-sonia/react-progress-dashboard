import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import spanishFlag from "../../images/spain.png";

function GroupInformation() {
  return (
    <div className="flex items-center">
      <div className="shadow-2xl w-54 mr-3 rounded-lg p-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="font-bold text-md text-slate-800">Group Info</h5>
          <FontAwesomeIcon className="cursor-pointer" icon={faBell} size="sm" />
        </div>

        <p className="text-xs text-slate-600 font-semibold">
          13 students in the group
        </p>

        <div className="cursor-pointer rounded-lg p-5 my-4 flex justify-between items-center bg-[#e66a35] text-peace">
          <div className="w-1/2">
            <h6 className="text-sm font-semibold mb-3">Group homework</h6>
            <p className="text-xs">5 students from your group online now</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>
        </div>

        <div className="flex justify-between items-center mb-1">
          <h5 className="font-bold text-md text-slate-800">Today's lesson</h5>
          <p className="text-sm font-semibold">12:00</p>
        </div>
        <p className="text-xs text-slate-600 font-semibold">
          unit 6 - Articles
        </p>
      </div>

      <div className="ml-4 flex items-cent">
        <div>
          <div className="shadow-xl rounded-lg w-10 h-10 p-1 bg-slate-50">
            <img
              src={spanishFlag}
              alt="flag"
              className="object-contain w-full h-full rounded-lg"
            />
          </div>

          <h6 className="font-bold text-2xl text-slate-700 mt-4">
            Spanish for <br /> beginners
          </h6>

          <div className="mt-6">
            <p className="text-sm font-bold">75%</p>
            <input type="range" min="1" max="100" defaultValue="75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupInformation;
