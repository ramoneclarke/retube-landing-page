import React from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";

const Header = ({ handleClick, handleClickScroll }) => {
  const router = useRouter();

  return (
    <div className="md:w-4/5 w-full px-4 md:px-0 h-20 mb-20 justify-between flex items-center">
      <Logo />
      <div className="gap-12 flex-1 pl-24 hidden md:flex">
        <button
          onClick={() => handleClickScroll("features")}
          className="text-gray-500 font-medium hover:text-mid"
        >
          Features
        </button>
        <button
          onClick={() => handleClickScroll("pricing")}
          className="text-gray-500 font-medium hover:text-mid"
        >
          Pricing
        </button>
      </div>
      <div className="gap-6 hidden md:flex">
        <button
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/login`)
          }
          className="text-darkest font-medium hover:text-mid"
        >
          Log in
        </button>
        <button
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`)
          }
          className="bg-brand text-darkest rounded-2xl hover:opacity-80 font-semibold px-8 py-4"
        >
          Sign up
        </button>
      </div>
      <AiOutlineMenu
        className="no-tap-highlight block cursor-pointer text-[1.8rem] text-brand lg:hidden lg:text-[2rem]"
        onClick={handleClick}
      />
    </div>
  );
};

export default Header;
