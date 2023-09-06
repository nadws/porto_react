import React from "react";
import Logo from "./avataaars.svg";

function Hero() {
  return (
    <div className="h-screen flex p-4 justify-center">
      <div className="w-max flex flex-col items-center justify-center text-center">
        <img src={Logo} alt="Deskripsi Gambar" />

        <h1 className="text-4xl font-bold mt-4 text-[#23272F]">Welcome</h1>
        <h2 className="text-3xl font-semibold mt-4 text-[#4C5361]">
          The library for web and native user interfaces
        </h2>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          Tombol Tumpul
        </button>
      </div>
    </div>
  );
}

export default Hero;
