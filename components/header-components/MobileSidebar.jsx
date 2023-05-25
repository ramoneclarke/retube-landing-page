import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  FaHome,
  FaListAlt,
  FaRegHandScissors,
  FaSearchengin,
} from "react-icons/fa";
import { useClickOutside } from "react-click-outside-hook";
import Logo from "./Logo";

const MobileSidebar = ({
  open,
  setOpen,
  menuClicked,
  setMenuClicked,
  handleClickScroll,
}) => {
  const [ref, hasClickedOutside] = useClickOutside();

  useEffect(() => {
    if (open && hasClickedOutside && ref.current) {
      setOpen(false);
    }
    if (menuClicked) {
      setMenuClicked(false);
    }
  }, [hasClickedOutside, open, setOpen, ref, menuClicked, setMenuClicked]);

  return (
    <motion.div
      className="absolute left-0 bottom-0 z-10 flex h-full w-2/3 flex-col items-center justify-start bg-lightest pt-2 dark:bg-darkest md:w-2/5 lg:hidden"
      initial={{ x: -800 }}
      animate={{
        x: 0,
      }}
      exit={{ x: -800 }}
      transition={{ duration: 0.3, type: "tween" }}
      ref={ref}
    >
      <div className="flex w-full p-4">
        <Logo />
      </div>
      <div className=" mt-8 flex w-full flex-col items-center gap-y-4">
        <button
          onClick={() => handleClickScroll("features")}
          className="no-tap-highlight justify-left no-tap-highlight flex h-11 w-5/6 cursor-pointer flex-row items-center gap-x-3 rounded-lg bg-lighter pl-3 no-underline shadow-sm  hover:bg-lighter font-medium dark:hover:bg-darker"
        >
          Features
        </button>
        <button
          onClick={() => handleClickScroll("pricing")}
          className="justify-left no-tap-highlight flex h-11 w-5/6 cursor-pointer flex-row items-center gap-x-3 rounded-lg bg-lighter pl-3 no-underline shadow-sm  hover:bg-lighter font-medium dark:hover:bg-darker"
        >
          Pricing
        </button>
      </div>
      <div className="flex h-full w-full flex-1 items-end justify-center">
        <div className="gap-2 flex p-2 flex-col h-fit w-full">
          <button
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/login`)
            }
            className="bg-lighter w-full text-darkest rounded-2xl hover:opacity-80 font-semibold px-8 py-4"
          >
            Log in
          </button>
          <button
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`)
            }
            className="bg-brand w-full text-darkest rounded-2xl hover:opacity-80 font-semibold px-8 py-4"
          >
            Sign up
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const navLinks = [
  {
    text: "Home",
    icon: <FaHome size="1.3rem" className="text-brand" />,
    path: "/",
  },
  {
    text: "Snippets",
    icon: <FaRegHandScissors size="1.3rem" className="text-brand" />,
    path: "/snippets",
  },
  {
    text: "Summaries",
    icon: <FaListAlt size="1.3rem" className="text-brand" />,
    path: "/summaries",
  },
  {
    text: "Search",
    icon: <FaSearchengin size="1.3rem" className="text-brand" />,
    path: "/search",
  },
];
export default MobileSidebar;
