import React from "react";
import Logo from "./hero.svg";
import Github from "../Logo/github.png";
import Insagram from "../Logo/instagram.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen flex p-4 justify-center">
      <motion.div
        className="w-max flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <h1 className=" font-extrabold text-[#404258] text-center mt-2 sm:text-4xl xs:text-4xl  font-poppins">
          Hi, Iam NProject
        </h1>
        <h1 className=" font-extrabold text-[#404258] text-center mt-2 mb-5 sm:text-4xl xs:text-4xl  font-poppins">
          As
          <span className="text-[#CBA033]">Web Developer & UI/UX Design</span>
        </h1>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/nadws" target="_blank">
            <img src={Github} alt="Deskripsi Gambar" className="w-14 mb-4" />
          </a>
          <a
            href="https://instagram.com/nanda_wahyudiii?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
          >
            <img src={Insagram} alt="Deskripsi Gambar" className="w-14 mb-4" />
          </a>
        </div>

        <div className="relative">
          <div className="w-72 h-72 bg-[#CBA033] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <img
            src={Logo}
            alt="Deskripsi Gambar"
            className="w-30 h-30  p-1 z-10 relative"
          />
        </div>
        <button className="bg-[#474E68] text-white text-2xl font-bold mt-6 px-4 py-4 rounded-xl hover:bg-[#6B728E] w-60">
          Hire Me
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
