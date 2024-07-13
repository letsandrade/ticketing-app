import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200">
      <div
        className="h-2.5 rounded-full bg-accent"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
