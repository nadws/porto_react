import React from "react";
import Logo from "./avataaars.svg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen flex p-4 justify-center">
      <motion.div
        className="w-max flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          src={Logo}
          alt="Deskripsi Gambar"
        />

        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mt-4 text-[#23272F]"
        >
          Welcome
        </motion.h1>
        <h2 className="text-3xl font-semibold mt-4 text-[#4C5361]">
          The library for web and native user interfaces
        </h2>
        <button className="bg-blue-500 text-white px-4 py-4 rounded-xl hover:bg-blue-700">
          Tombol Tumpul
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
