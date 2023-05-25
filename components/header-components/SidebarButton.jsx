import Link from "next/link";
import React from "react";

const SidebarButton = ({ link }) => {
  return (
    <Link
      href={link.path}
      className="justify-left no-tap-highlight flex h-11 w-5/6 cursor-pointer flex-row items-center gap-x-3 rounded-lg bg-lighter pl-3 no-underline shadow-sm  hover:bg-lighter dark:hover:bg-darker"
      aria-label={`${link.text} page`}
    >
      {link.icon}
      <p className="text-base font-medium text-darker dark:text-lightest">
        {link.text}
      </p>
    </Link>
  );
};

export default SidebarButton;
