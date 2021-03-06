import React from "react";
import MiddleLayout from "../components/MiddleLayout/MiddleLayout";
import RightProfile from "../components/RightProfile/RightProfile";
import SideBar from "../components/SideBarLeft/SideBarLeft";

function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-32 flex w-90 absolute right-0">
        <MiddleLayout />
        <RightProfile />
      </div>
    </div>
  );
}

export default DashboardLayout;
