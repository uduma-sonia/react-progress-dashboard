import React from "react";
import avatar from "../../images/profile_img.png";

export default function ProfileCard() {
  return (
    <div className="mt-20 flex flex-col items-center text-center">
      <div>
        <div className="w-28 h-28 rounded-full p-2 background-grad">
          <img
            className="w-full h-full object-center object-contain"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-bold text-slate-900 text-2xl">Chandler Bing</h3>
        <p className="text-xs font-semibold text-slate-500 mt-2">
          Front-end Developer
        </p>
      </div>
    </div>
  );
}
