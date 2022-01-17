import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function GroupInformation() {
  return (
    <div className="flex">
      <div className="shadow-2xl w-54 mr-3 rounded-lg p-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="font-bold text-md text-slate-800">Group Info</h5>
          <FontAwesomeIcon className="cursor-pointer" icon={faBell} size="md" />
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
            <FontAwesomeIcon icon={faChevronRight} size="md" />
          </div>
        </div>

        <div className="flex justify-between items-center mb-1">
          <h5 className="font-bold text-md text-slate-800">Today's lesson</h5>
          <p>12:00</p>
        </div>
        <p className="text-xs text-slate-600 font-semibold">
          unit 6 - Articles
        </p>
      </div>

      <div className="border border-red-700 ml-4">Right</div>
    </div>
  );
}

export default GroupInformation;
