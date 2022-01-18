import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faChevronRight,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function MiddleLayoutFooter() {
  return (
    <div className="mt-10 flex">
      <div className="w-1/2 mr-3 rounded flex justify-between items-center px-5 py-7 shadow-inner border border-slate-300">
        <div className="flex items-center">
          <div className="mr-3">
            <div className="text-[#5d3d8f] shadow-xl shadow-slate-300 rounded-full w-7 h-7 flex justify-center items-center bg-slate-100">
              <FontAwesomeIcon icon={faPencilAlt} size="sm" />
            </div>
          </div>

          <div>
            <h6 className="text-sm font-bold">Grammar</h6>
            <p className="text-xs font-semibold text-slate-700">
              +30 grammar rules
            </p>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </div>
      </div>

      <div className="w-1/2 ml-2 rounded flex justify-between items-center px-5 py-7 shadow-inner border border-slate-300">
        <div className="flex items-center">
          <div className="mr-3">
            <div className="text-[#5d3d8f] shadow-xl shadow-slate-300 rounded-full w-7 h-7 flex justify-center items-center bg-slate-100">
              <FontAwesomeIcon icon={faBookOpen} size="sm" />
            </div>
          </div>

          <div>
            <h6 className="text-sm font-bold">Dictionary</h6>
            <p className="text-xs font-semibold text-slate-700">
              +10 new words
            </p>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </div>
      </div>
    </div>
  );
}
