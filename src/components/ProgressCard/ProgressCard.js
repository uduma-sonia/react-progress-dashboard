import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProgressCard() {
  return (
    <div className="border border-slate-300 rounded flex items-center px-4 py-5 mb-5">
      <div className="w-1/2 flex items-center">
        <p className="w-1/2 text-md font-semibold">40%</p>

        <div className="w-1/2">
          <div className="bg-[#5d3d8f] w-11 h-11 flex items-center justify-center rounded-lg text-slate-200">
            <FontAwesomeIcon icon={faPencilAlt} />
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <h6 className="text-md font-bold">Grammar</h6>
        <p className="text-xs font-semibold text-slate-400">Learn new rules</p>
      </div>
    </div>
  );
}
