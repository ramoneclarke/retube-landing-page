import React from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";

const Header = () => {
  const router = useRouter();

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-4/5 h-20 mb-20 justify-between flex items-center">
      <Logo />
      <div className="flex gap-12 flex-1 pl-24">
        <button
          onClick={() => handleClickScroll("features")}
          className="text-gray-500 font-medium hover:text-mid"
        >
          Features
        </button>
        <button className="text-gray-500 font-medium hover:text-mid">
          Pricing
        </button>
      </div>
      <div className="flex gap-6">
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
    </div>
  );
};

export default Header;
