import Image from "next/image";
import React from "react";
import HeroImg from "../../public/images/heroimg2.png";

const Hero = ({ data }) => {
  return (
    <div className="h-4/5 md:w-4/5 w-full md:px-0 px-6 flex md:flex-row flex-col mb-32">
      <div className="md:w-[40%] w-full flex flex-col gap-4 items-center md:items-start">
        {" "}
        <h1 className="lg:text-7xl  md:text-5xl text-center md:text-left text-5xl mt-8 font-bold">
          {data[0].heading}
        </h1>
        <h2 className="text-xl text-center md:text-left font-medium text-slate-500">
          {data[0].sub_heading}
        </h2>
        <button
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`)
          }
          className="bg-brand text-darkest rounded-2xl hover:opacity-80 font-bold md:w-fit w-4/5 px-8 py-4"
        >
          {data[0].cta_button.text}
        </button>
      </div>
      <div className="md:w-[60%] w-full mt-8 md:mt-0">
        <Image src={HeroImg} alt="retube app screenshots" />
      </div>
    </div>
  );
};

export default Hero;
