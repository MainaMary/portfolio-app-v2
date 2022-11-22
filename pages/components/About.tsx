import React from "react";
import Link from "next/link";
import Title from "./Title";
import AlternativeButton from "./AlternativeButton";

const About = () => {
  return (
    <div>
      <section className="block md:flex justify-between pt-20" id="about">
        <div className="w-full text-center md:w-[60%] md:text-start">
          <Title>About</Title>
          <p className="font-medium w-full text-base md:w-[80%]">
            I am passionate about problem solving using technology and it's
            endless capabilities. I specialize in building exceptional digital
            experiences and intuitive web applications.. My primary focus is
            frontend development using React,Typescript and Nextjs to create
            intuitive user interfaces on the client side. Currently learning
            backend technolgies using NodeJS and MongoDB.
          </p>
          <p className="mt-5 text-regal-pink font-bold">
            <Link href="https://medium.com/@wanjikumary" target="_blank">
              Check out my latest articles
            </Link>
          </p>
        </div>
        <div className="w-full mt-10 md:w-[60%] md:mt-0">
          <Title>Skills</Title>
          <div className="block md:flex w-full justify-between flex-wrap h-auto gap-0 md:gap-[.95] ">
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
      </section>
    </div>
  );
};

export default About;
