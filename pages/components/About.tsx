import React from "react";
import Link from "next/link";
import Title from "./Title";
import AlternativeButton from "./AlternativeButton";

const About = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-between pt-20" id="about">
        <div className="w-[60%]">
          <Title>About</Title>
          <p className="font-medium text-base w-[80%]">
            I am passionate about problem solving using technology and it's
            endless capabilities. I specialize in building exceptional digital
            experiences and intuitive web applications.. My primary focus is
            frontend development using React,Typescript and Nextjs to create
            intuitive user interfaces on the client side. Currently learning
            backend technolgies using NodeJS and MongoDB.
          </p>
          <Link
            className="mt-10"
            href="https://medium.com/@wanjikumary"
            target="_blank"
          >
            Check out my latest articles
          </Link>
        </div>
        <div className="w-[60%] bg-slate-400">
          <Title>Skills</Title>
          <div className="flex w-full justify-between flex-wrap h-auto gap-[.95] ">
            <AlternativeButton color={false}>
              Website development
            </AlternativeButton>
            <AlternativeButton>Responsive web design</AlternativeButton>
            <AlternativeButton>Progressive web application</AlternativeButton>
            <AlternativeButton>Building REST APIs</AlternativeButton>
            <AlternativeButton>Firebase intergration</AlternativeButton>
            <AlternativeButton>Technical writing</AlternativeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
