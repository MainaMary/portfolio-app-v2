import React from "react";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
  href?: string;
}
const IconWrap = ({ children, href }: Props) => {
  return (
    <Link
      href={href || ""}
      className="p-3 bg-white rounded-full flex  text-xl shadow-lg  font-bold cursor-pointer text-regal-pink"
    >
      {children}
    </Link>
  );
};

export default IconWrap;
