import Image from "next/image";
import React from "react";

const FeatureRow = ({ heading, points, textPosition, image, imageAlt }) => {
  return (
    <div
      className={`flex w-full ${
        textPosition === "right"
          ? "md:flex-row-reverse flex-col"
          : "md:flex-row flex-col"
      } justify-center items-center gap-4 md:gap-0`}
    >
      <div className="flex flex-col gap-3 md:w-1/2 w-full px-4 md:px-0 text-slate-600">
        <h2 className="font-semibold md:text-3xl text-2xl mb-4 text-darkest">
          {heading}
        </h2>
        {points.map((point, index) => (
          <p key={index} className="md:text-base lg:text-lg text-base">
            {point}
          </p>
        ))}
      </div>
      <div className="md:w-1/2 w-full">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default FeatureRow;
