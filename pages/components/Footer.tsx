import React from "react";
import IconWrap from "./IconWrap";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMedium,
  AiFillTwitterCircle,
} from "react-icons/ai";
const footerList = [
  {
    link:"https://www.linkedin.com/in/mary-maina/",
    icon: <AiFillLinkedin/>
  },
  {
    link: "https://github.com/MainaMary",
    icon: <AiFillGithub/>
  },
  {
    link: "https://twitter.com/Wanjiku_MM",
    icon: <AiFillLinkedin/>
  },
  {
    link: "https://wanjikumary.medium.com/",
    icon: <AiOutlineMedium/>
  }
]
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
          {
            footerList.map((label)=><IconWrap href={label.link} key={label.link}>{label.icon}</IconWrap>)
          }
          
        </div>
      </div>
      <p className="text-start mb-5 md:text-start">
        Copy rights 2022. All reserved
      </p>
    </footer>
  );
};

export default Footer;
