import React from "react";
import Box from "../Box/Box";
import ExamCard from "../ExamCard/ExamCard";
import GroupInformation from "../GroupInformation/GroupInformation";

function MiddleLayout() {
  return (
    <div className="w-3/5 px-10">
      <h1 className="text-4xl font-bold text-slate-800 mt-20 mb-7">
        Progress Dashboard
      </h1>
      <div className="flex mb-10">
        <ExamCard />
        <Box />
      </div>
      <GroupInformation />
    </div>
  );
}

export default MiddleLayout;
