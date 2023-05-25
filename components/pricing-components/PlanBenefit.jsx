import React from "react";
import { GiCheckMark } from "react-icons/gi";

const PlanBenefit = ({ text, bold }) => {
  if (bold) {
    return (
      <div className="flex my-2 h-16 flex-row items-center gap-2 md:h-20 lg:h-12">
        <div className="flex items-center justify-center">
          <GiCheckMark className="text-2xl text-brand" />{" "}
        </div>
        <p className="font-semibold">{text}</p>
      </div>
    );
  }
  return (
    <div className="flex mb-1 lg:mb-3 h-16 flex-row items-center gap-2 md:h-24 lg:h-12">
      <div className="flex items-center justify-center">
        <GiCheckMark className="text-2xl text-brand" />{" "}
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default PlanBenefit;
