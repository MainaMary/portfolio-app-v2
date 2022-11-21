import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import Profile from "../../public/assets/userProfile.svg";
import AlternativeButton from "./AlternativeButton";
import Link from "next/link";
const HomePage = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [letter, setLetter] = useState<number>(400 - Math.random() * 100);
  const timer = 500;
  const arr = ["ReactJs, Typescript,Tailwind css, Material UI, NextJS"];
  const handleTick = () => {
    let i = loopNum % arr.length;
    let fullText = arr[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setLetter((prev) => prev / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLetter(timer);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetter(1000);
    }
    console.log(i, "fullText");
  };
  useEffect(() => {
    let tick = setInterval(() => {
      handleTick();
    }, letter);
    return () => clearInterval(tick);
  }, [text]);
  return (
    <section id="home" className="text-center">
      <div
        className="grid-cols-1 md:grid-cols-2 grid gap-10 md:gap-28 my-5  md:mt-20 pt-20"
        id="home "
      >
        <div className="w-[100%] m-auto">
          <div className="mb-5">
            <AlternativeButton color={true}>
              Welcome to my portfolio
            </AlternativeButton>
          </div>
          <h2 className="mb-5">
            Hi! my name is <span>Mary Maina</span>
          </h2>
          <h2 className="font-semibold mb-4">Frontend Developer</h2>
          <h2 className="font-medium mb-4">{text}</h2>
          <p className="font-medium text-base">
            I am a professional frontend developer passionate about building
            intuitive, scalable and effecient web applications.
          </p>
          <div className="flex justify-between mt-5">
            <Button color={true}>Get Resume</Button>
            <Button color={false}>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>
        </div>
        <div className="w-[100%] text-center m-auto">
          <Image
            className="transform transition-all hover:scale-110"
            src={Profile}
            width={600}
            height={400}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
