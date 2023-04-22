import React from "react";

const Skeleton = () => {
  return (
    <div className="relative shadow p-5 card animate-pulse">
      <div className="h-52 w-52 bg-gray-200 rounded-md mx-auto"></div>
      <div className="card-icon bg-gray-200 w-12 h-12 rounded-[50%] items-center justify-center absolute top-[30%] left-[40%] hidden"></div>
      <div className="h-8 bg-gray-200 rounded-md mt-3"></div>
      <div className="flex justify-between items-center mt-2">
        <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded-md w-1/3 ml-auto"></div>
      </div>
    </div>
  );
};

export default Skeleton;
