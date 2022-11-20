import React from "react";
import Button from "./Button";
import Image from "next/image";
import Profile from "../../public/assets/userProfile.svg";
import AlternativeButton from "./AlternativeButton";
const HomePage = () => {
  return (
    <section className="text-center">
      <div className="grid-cols-2 grid gap-28 my-20" id="home ">
        <div className="w-[100%] m-auto">
          <div className="mb-5">
            <AlternativeButton color={true}>
              Welcome to my portfolio
            </AlternativeButton>
          </div>
          <h2 className="mb-5">
            Hi! my name is <span>Mary Maina</span>
          </h2>
          <h2 className="font-medium mb-5">Front-end Developer</h2>
          <p className="font-medium text-base">
            I am a professional frontend developer passionate about building
            intuitive, scalable and effecient web applications.
          </p>
          <div className="flex justify-between mt-5">
            <Button color={true}>Get Resume</Button>
            <Button color={false}>Contact me</Button>
          </div>
        </div>
        <div className="w-[100%] text-center m-auto ">
          <Image src={Profile} width={700} height={400} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
