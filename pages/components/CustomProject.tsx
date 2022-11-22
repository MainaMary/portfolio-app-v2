import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface Props {
  title: string;
  content: string | JSX.Element;
  demoLink: string;
  githubLink: string;
  image: any;
  checker?: boolean;
}

const CustomProject = (props: Props) => {
  const { title, content, demoLink, githubLink, image, checker = true } = props;
  return (
    <div>
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className={
          checker
            ? "flex w-full flex-col-reverse md:flex-row gap-1 pb-20"
            : "flex w-full flex-col-reverse md:flex-row-reverse gap-8 pb-20"
        }
      >
        <div className="w-full md:w-[50%] ">
          <div className="w-full md:w-[80%]">
            <h1 className=" text-center hidden md:text-start md:block">
              {title}
            </h1>
            <div className="mt-8">
              <div>{content}</div>
            </div>

            <div className="flex w-full gap-5 mt-8">
              <button className=" h-auto w-full md:w-[30%] border-[#e91e63] bg-white px-2 py-2 border rounded-md ">
                <Link
                  target="_blank"
                  className="no-underline text-[#e91e63] w-full flex justify-around items-center text-xs  font-semibold text-semi"
                  href={demoLink}
                >
                  <BsArrowUpRightCircleFill size={24} />
                  <p className="uppercase">Live site</p>
                </Link>
              </button>
              <button className=" h-auto w-full md:w-[30%] border-[#e91e63] bg-white px-2 py-2 border rounded-md">
                <Link
                  className="no-underline text-[#e91e63] w-full flex justify-around items-center text-xs  font-semibold text-semi"
                  href={githubLink}
                  target="_blank"
                >
                  <AiFillGithub size={24} />
                  <p className="uppercase">Github</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={checker ? "w-full md:w-[50%]" : "w-full md:w-[50%]"}>
          <h1 className=" text-center my-5 block md:hidden md:text-start">
            {title}
          </h1>
          <Image
            className="rounded-lg"
            src={image}
            width={600}
            height={400}
            alt="profile"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CustomProject;
