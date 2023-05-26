import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import Link from "next/link";

const Header = ({ handleClick, handleClickScroll }) => {
  return (
    <div className="lg:w-4/5 w-full px-4 lg:px-0 md:px-6 h-20 md:mb-20 mb-2 justify-between flex items-center">
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
        <Link href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/login`}>
          <button className="text-darkest font-medium hover:text-mid py-4">
            Log in
          </button>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`}>
          <button className="bg-brand text-darkest rounded-2xl hover:opacity-80 font-semibold px-8 py-4">
            Sign up
          </button>
        </Link>
      </div>
      <AiOutlineMenu
        className="no-tap-highlight block md:hidden cursor-pointer text-[1.8rem] text-brand lg:hidden lg:text-[2rem]"
        onClick={handleClick}
      />
    </div>
  );
};

export default Header;
