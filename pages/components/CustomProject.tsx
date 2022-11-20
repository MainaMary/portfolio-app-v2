import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Title from "./Title";
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
      <div
        className={
          checker
            ? "flex w-full flex-row gap-1 mb-20"
            : "flex w-full flex-row-reverse gap-8 mb-20"
        }
      >
        <div className="w-[50%] ">
          <div className="w-[80%]">
            <Title>{title}</Title>
            <div className="mt-8">
              <p>{content}</p>
            </div>

            <div className="flex w-full gap-5 mt-8">
              <button className=" h-auto w-[30%] border-[#e91e63] bg-white px-2 py-2 border rounded-md ">
                <Link
                  target="_blank"
                  className="no-underline text-[#e91e63] w-full flex justify-around items-center text-xs  font-semibold text-semi"
                  href={demoLink}
                >
                  <BsArrowUpRightCircleFill size={24} />
                  <p className="uppercase">Live site</p>
                </Link>
              </button>
              <button className=" h-auto w-[30%] border-[#e91e63] bg-white px-2 py-2 border rounded-md">
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
        <div className={checker ? "w-[50%]" : "w-[50%] bg-white"}>
          <Image
            className="rounded-lg"
            src={image}
            width={900}
            height={400}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomProject;
