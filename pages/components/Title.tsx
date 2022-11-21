import React from "react";
interface Props {
  children: string;
}
const Title = ({ children }: Props) => {
  return <h1 className=" text-center my-5 md:text-start">{children}</h1>;
};

export default Title;
