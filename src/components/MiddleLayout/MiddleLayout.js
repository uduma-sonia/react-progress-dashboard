import React from "react";
import Box from "../Box/Box";
import ExamCard from "../ExamCard/ExamCard";

function MiddleLayout() {
  return (
    <div className="w-3/5 px-10">
      <h1 className="text-4xl font-bold text-slate-800 mt-28 mb-7">
        Progress Dashboard
      </h1>

      <div className="flex">
        <ExamCard />

        <Box />
      </div>
    </div>
  );
}

export default MiddleLayout;
