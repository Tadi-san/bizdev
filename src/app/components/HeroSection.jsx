"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import eng from "./lang"
const HeroSection = () => {

  return (
    <section className="md:h-[85vh] ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-20 md:mb-4 text-6xl md:text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {eng.heroTitle}
            </span>
            <br></br>
            <TypeAnimation 
              sequence={[
                eng.change1,
                1000,
                eng.change2,
                1000,
                eng.change3,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {eng.heroDesc}
          </p>
          <div>
            <Link
              href="/#calculate"
              className=" toma "
            >

              {eng.calculate}
            </Link>
            <Link
              href="/#contact"
              className="toma "
            >
              {eng.contact}
              
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-primary-50 hidden md:show">
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
