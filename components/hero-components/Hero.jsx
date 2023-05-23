import Image from "next/image";
import React from "react";
import HeroImg from "../../public/images/heroimg2.png";

const Hero = ({ data }) => {
  return (
    <div className="h-4/5 w-4/5 flex flex-row mb-32">
      <div className="w-[40%] flex flex-col gap-4">
        {" "}
        <h1 className="text-7xl mt-8 font-bold">{data[0].heading}</h1>
        <h2 className="text-xl font-medium text-slate-500">
          {data[0].sub_heading}
        </h2>
        <button
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`)
          }
          className="bg-brand text-darkest rounded-2xl hover:opacity-80 font-bold w-fit px-8 py-4"
        >
          {data[0].cta_button.text}
        </button>
      </div>
      <div className="w-[60%]">
        <Image src={HeroImg} alt="retube app screenshots" />
      </div>
    </div>
  );
};

export default Hero;
