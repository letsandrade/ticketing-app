import React from "react";

const ProgressBar = () => {
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200">
      <div
        className="h-2.5 rounded-full bg-blue-600"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
