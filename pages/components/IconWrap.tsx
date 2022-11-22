import React from "react";
import Link from "next/link";
interface Props {
  children: JSX.Element;
  href: string;
}
const IconWrap = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 bg-white rounded-full flex  text-xl shadow-lg  font-bold cursor-pointer text-regal-pink"
    >
      {children}
    </Link>
  );
};

export default IconWrap;
