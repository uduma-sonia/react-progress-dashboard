import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProgressCard({
  title,
  percent,
  color,
  subTitle,
  icon,
}) {
  return (
    <div className="border border-slate-300 rounded flex items-center px-4 py-5 mb-5">
      <div className="w-1/2 flex items-center">
        <p className="w-1/2 text-md font-semibold" style={{ color: color }}>
          {percent}%
        </p>

        <div className="w-1/2">
          <div
            style={{ backgroundColor: color }}
            className=" w-11 h-11 flex items-center justify-center rounded-lg text-slate-200"
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <h6 className="text-md font-bold">{title}</h6>
        <p className="text-xs font-semibold text-slate-400">{subTitle}</p>
      </div>
    </div>
  );
}
