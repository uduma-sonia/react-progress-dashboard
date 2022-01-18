import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-300">
      <h1 className="text-center text-slate-700 font-semibold text-sm">
        ...This site can only be viewed on desktop (950px)...
      </h1>

      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
    </div>
  );
}
