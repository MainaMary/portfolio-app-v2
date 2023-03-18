import React, { useState, useRef } from "react";
import ContactImg from "../../public/assets/userProfile.svg";
import Image from "next/image";
import Title from "./Title";
import Button from "./Button";

interface FormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = () => {
  const formRef = useRef<any>("");
  const defaultValues: FormProps = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState<FormProps>(defaultValues);
  const [formError, setFormError]= useState<string>('')
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
    setFormError('')
  };

  // const handleFormSubmit = async (e: any) => {
  //   e.preventDefault();
  //   emailjs
  //     .send(
  //       "service_5fuc2vq",
  //       "template_h71uspk",
  //       formRef.current,
  //       "15H44kZhfedbp-EJH"
  //     )
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //       }
  //     );
  //   e.target.reset();
  // };
  const {name, email, subject,message} = formDetails
  const submitForm = async (e: any) => {
    e.preventDefault();
    if(!name || !email || !subject || !message){
      setFormError('Please submit all values')

    }

    try {
      await fetch("http://localhost:3000/api/hello", {
        method: "POST",
        body: JSON.stringify(formDetails),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => console.log({ response }));
    } catch (err: any) {
      console.log(err, "error");
    }
    setLoading(false);
  };
  return (
    <section className="pt-20" id="contact">
      <div className=" w-full mb-5 md:mb-10">
        <Title>Contact me</Title>

        <div className="grid cols-span-2  gap-4">
          <div className="block md:flex w-full h-full shadow-inner shadow-gray-400 p-4 md:p-8 rounded-lg">
            <div className="w-full md:w-[50%]">
              <Image
                className="roundex-xl hover:scale-100 ease-in duration-300"
                src={ContactImg}
                width={500}
                height={30}
                alt="hero"
              />
              <p className="mt-10">
                I am available for freelancing gigs or full time opportunities.
                <br />{" "}
                <span className="text-regal-pink">Contact me.Lets talk!</span>
              </p>
            </div>
            <div className="w-full md:w-[50%] ">
              <div className="p-2 md:p-4">
                <h2 className="text-xl text-[#e91e63]">Get in touch</h2>
                {formError ?  <p className="text-red-500">{formError}</p>: ''}
                <form ref={formRef} onSubmit={submitForm}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        value={formDetails.name}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="border-2 rounded-lg p-3 border-gray-300 flex outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Email</label>
                      <input
                        value={formDetails.email}
                        type="text"
                        name="email"
                        onChange={handleChange}
                        className="border-2 rounded-lg p-3 border-gray-300 flex outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      value={formDetails.subject}
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 border-gray-300 flex outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 rows-20 cols-4 outline-none"
                      value={formDetails.message}
                    ></textarea>
                  </div>
                  <div className="flex flex-col w-full my-5">
                    <Button disabled={loading} type="submit" color>
                      {loading ? "loading.." : "submit"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
