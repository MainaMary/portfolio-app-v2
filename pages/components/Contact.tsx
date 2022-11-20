import React from "react";
import ContactImg from "../../public/assets/userProfile.svg";
import Image from "next/image";
import Title from "./Title";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="px-2 w-full mb-20">
      <Title>Contact me</Title>

      <div className="grid cols-span-2  gap-4">
        <div className="flex w-full h-full shadow-inner shadow-gray-400 p-4 rounded-lg">
          <div className="w-[50%]">
            <Image
              className="roundex-xl hover:scale-100 ease-in duration-300"
              src={ContactImg}
              width={600}
              height={300}
              alt="hero"
            />
            <p className="mt-5">
              I am available for freelancing gigs or full time opportunities.
              <br /> <span>Contact me.Lets talk!</span>
            </p>
          </div>
          <div className="w-[50%] ">
            <div className="p-4">
              <h2 className="text-xl text-[#e91e63]">Get in touch</h2>
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 border-gray-300 flex outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 border-gray-300 flex outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300 flex outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg rows-20 cols-4 outline-none"></textarea>
                </div>
                <div className="flex flex-col w-full my-8">
                  <Button color>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
