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
    <footer className=" py-5 text-[#ECF0F3] w-full">
      <div className=" block md:flex h-auto items-center my-5 w-full">
        <p className="w-ful md:w-1/2">
          Follow me on my socials.
          <br className="block md:hidden" />
          Lets connect😎{" "}
        </p>
        <div className="w-full flex justify-between my-4 md:w-1/3]">
          <IconWrap
            href="https://www.linkedin.com/in/mary-maina/
"
          >
            <AiFillLinkedin />
          </IconWrap>
          <IconWrap href="https://github.com/MainaMary">
            <AiFillGithub />
          </IconWrap>
          <IconWrap href="https://twitter.com/Wanjiku_MM">
            <AiFillTwitterCircle />
          </IconWrap>
          <IconWrap href="https://wanjikumary.medium.com/">
            <AiOutlineMedium />
          </IconWrap>
        </div>
      </div>
      <p className="text-start mb-5 md:text-start">
        Copy rights 2022. All reserved
      </p>
    </footer>
  );
};

export default Footer;
