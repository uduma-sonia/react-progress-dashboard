import React from "react";

function ExamCard() {
  return (
    <div className="w-1/2 text-peace rounded-lg bg-[#5d3d8f] mr-3 p-5">
      <p className="text-xs">
        <span className="opacity-60">DEADLINE </span>
        12:00
      </p>

      <p className="text-3xl font-semibold mt-5">Exam - Unit 5</p>

      <p className="text-xs opacity-70 mt-2">Spanish for beginners</p>

      <div className="flex justify-between mt-3">
        <div></div>

        <a className="text-sm underline cursor-pointer">Start Testing</a>
      </div>
    </div>
  );
}

export default ExamCard;
