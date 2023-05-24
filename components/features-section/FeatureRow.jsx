import Image from "next/image";
import React from "react";

const FeatureRow = ({ heading, points, textPosition, image, imageAlt }) => {
  return (
    <div
      className="flex w-full justify-center items-center"
      style={{
        flexDirection: textPosition === "right" ? "row-reverse" : "row",
      }}
    >
      <div className="flex flex-col gap-3 w-1/2 text-slate-600">
        <h2 className="font-semibold text-3xl mb-4 text-darkest">{heading}</h2>
        {points.map((point, index) => (
          <p key={index} className="text-lg ">
            {point}
          </p>
        ))}
      </div>
      <div className="w-1/2">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default FeatureRow;
