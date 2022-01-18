import React from "react";
import Box from "../Box/Box";
import ExamCard from "../ExamCard/ExamCard";
import GroupInformation from "../GroupInformation/GroupInformation";
import MiddleLayoutFooter from "../MiddleLayoutFooter/MiddleLayoutFooter";

function MiddleLayout() {
  return (
    <div className="w-70 px-10 mb-20">
      <h1 className="text-4xl font-bold text-slate-800 mt-20 mb-7">
        Progress Dashboard
      </h1>
      <div className="flex mb-10">
        <ExamCard />
        <Box />
      </div>
      <GroupInformation />
      <MiddleLayoutFooter />
    </div>
  );
}

export default MiddleLayout;
