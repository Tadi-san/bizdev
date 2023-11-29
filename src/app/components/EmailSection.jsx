"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg- from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-black my-2">
          Contact Us
        </h5>
        <p className="text-slate-800 mb-4 max-w-md">
          {" "}
          You can contact us thorough every social media, choose what ever makes you comfortable 🙂 
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com" className=" ">
            <Image src={GithubIcon} alt="Github Icon" className=" bg-black rounded-full " />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className=" bg-black rounded-2xl w-fit " />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col justify-center items-center  w-full">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-slate-100 border border-[#33353F] placeholder-slate-600 text-gray-900 text-sm rounded-lg block w-3/5 p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6 flex flex-col justify-center items-center  w-full">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-slate-100 border border-[#33353F] placeholder-slate-600 text-gray-900 text-sm rounded-lg block w-3/5 p-2.5"
                 placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6 flex flex-col justify-center items-center  w-full">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-slate-100 border border-[#33353F] placeholder-slate-600 text-gray-900 text-sm rounded-lg block w-3/5 p-2.5 h-36"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-3/5"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
