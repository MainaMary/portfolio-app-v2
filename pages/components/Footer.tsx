import React from "react";
import IconWrap from "./IconWrap";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMedium,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className=" py-10  h-5 md:h-10 w-full px-[-80px]">
      <div className=" block md:flex h-auto items-center my-5 w-full">
        <p>Follow me on my socials.Let's connect😎 </p>
        <div className="flex my-4 justify-between w-[2/3]">
          <IconWrap>
            <AiFillLinkedin />
          </IconWrap>
          <IconWrap>
            <AiFillGithub />
          </IconWrap>
          <IconWrap>
            <AiFillTwitterCircle />
          </IconWrap>
          <IconWrap>
            <AiOutlineMedium />
          </IconWrap>
        </div>
      </div>
      <p className="text-center mb-5 md:text-start">
        Copy rights 2022. All reserved
      </p>
    </footer>
  );
};

export default Footer;
