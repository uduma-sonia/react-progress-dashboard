import React from "react";
import MiddleLayout from "../components/MiddleLayout/MiddleLayout";
import RightProfile from "../components/RightProfile/RightProfile";
import SideBar from "../components/SideBarLeft/SideBarLeft";

function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />
      <MiddleLayout />
      <RightProfile />
    </div>
  );
}

export default DashboardLayout;
