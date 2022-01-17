import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

function Box() {
  return (
    <div className="w-1/2 ml-4 flex">
      <div className="text-[#fa9898] rounded-lg p-4 w-1/2 mr-4 homework-card">
        <FontAwesomeIcon
          className="text-slate-500 cursor-pointer"
          icon={faCheckCircle}
          size="lg"
          className="my-4"
        />
        <p className="font-bold mb-3">Homework</p>
        <p className="text-semibold text-xs">For today's lesson</p>
      </div>

      <div className="p-4 rounded-lg w-1/2 ml-4 reading-card text-[#5d3d8f]">
        <FontAwesomeIcon
          className="text-slate-500 cursor-pointer"
          icon={faCheckCircle}
          size="lg"
          className="my-4"
        />
        <p className="font-bold mb-3">Reading</p>
        <p className="text-semibold text-xs">25 words per week</p>
      </div>
    </div>
  );
}

export default Box;
