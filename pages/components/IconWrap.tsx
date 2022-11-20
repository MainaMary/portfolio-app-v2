import React from "react";
interface Props {
  children: JSX.Element;
}
const IconWrap = ({ children }: Props) => {
  return (
    <div className="p-3 bg-white rounded-full flex  text-xl shadow-lg  font-bold cursor-pointer text-regal-pink">
      {children}
    </div>
  );
};

export default IconWrap;
