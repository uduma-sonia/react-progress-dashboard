import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPencilAlt,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import ProgressCard from "../ProgressCard/ProgressCard";

function RightProfile() {
  return (
    <div className="w-30 bg-slate-100 px-10">
      <ProfileCard />

      <div className="shadow-inner border border-slate-300 mt-10 px-3 py-7 flex justify-between items-center">
        <div>
          <h3 className="text-md font-bold text-slate-700">
            Get -10% sell price
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">
            for Spanish A2 course
          </p>
        </div>

        <div className="text-[#e66a35] shadow-xl shadow-slate-300 rounded w-7 h-7 flex justify-center items-center bg-slate-100">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-center font-bold text-slate-700 text-xl mb-5">
          Courses Progress
        </h2>

        {data.map((card, index) => (
          <ProgressCard
            key={index}
            title={card.title}
            percent={card.percent}
            subTitle={card.subTitle}
            color={card.color}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    percent: 63,
    title: "Grammar",
    subTitle: "Learn new rules",
    color: "#5d3d8f",
    icon: faPencilAlt,
  },
  {
    percent: 70,
    title: "Dictionary",
    subTitle: "Learn 5 new words",
    color: "#e66a35",
    icon: faPencilAlt,
  },
  {
    percent: 40,
    title: "Reading",
    subTitle: "Train your skill",
    color: " #ff4538",
    icon: faBookOpen,
  },
];

export default RightProfile;
