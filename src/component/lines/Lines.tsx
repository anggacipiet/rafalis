import React from "react";

const Lines = () => {
  return (
    <div className="fixed left-0 top-0 -z-20 flex h-full w-full items-center justify-around">
      <span className="flex h-full w-[1px] animate-line1 bg-gray-400"></span>
      <span className="flex h-full w-[1px] animate-line2 bg-gray-400"></span>
      <span className="flex h-full w-[1px] animate-line3 bg-gray-400"></span>
    </div>
  );
};

export {Lines};