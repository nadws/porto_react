import React, { useRef, useEffect, useState } from "react";
import Logo from "./hero.svg";
import Github from "../Logo/github.png";
import Insagram from "../Logo/instagram.png";
import Pesil from "../Logo/pencil.png";
import { motion } from "framer-motion";

function Hero() {
  const canvasRef = useRef(null);
  let drawing = false;
  let lastX = 0;
  let lastY = 0;

  // State untuk melacak apakah coretan masih aktif atau tidak
  const [isDrawingActive, setIsDrawingActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    const handleMouseDown = (e) => {
      drawing = true;
      [lastX, lastY] = [
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop,
      ];
    };

    const handleMouseMove = (e) => {
      if (!drawing) return;
      ctx.strokeStyle = "#CBA033";
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      [lastX, lastY] = [
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop,
      ];
      ctx.lineTo(lastX, lastY);
      ctx.stroke();
    };

    const handleMouseUp = () => {
      drawing = false;
      setIsDrawingActive(true); // Setelah coretan, atur state menjadi aktif
      // Setelah 20 detik, atur state menjadi non-aktif dan hapus isi canvas
      setTimeout(() => {
        setIsDrawingActive(false);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 10000); // 20000 milidetik = 20 detik
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div className="h-full flex p-4 justify-center relative bg-[#0D1018]">
      <canvas
        ref={canvasRef}
        width={1400}
        height={500}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          cursor: isDrawingActive ? `url(${Pesil}) ${Pesil}, auto` : "auto",
        }}
      />
      <motion.div
        className="w-max flex flex-col items-center justify-center text-center relative"
        style={{ zIndex: 20 }}
        initial={{ opacity: 0, y: -100 }} // Atur opacity ke 0 dan posisi Y ke luar layar atas
        animate={{ opacity: 1, y: 0 }} // Animasikan opacity ke 1 dan posisi Y ke 0
        transition={{ duration: 2, delay: 0.5 }} // Atur durasi animasi dan penundaan jika diperlukan
      >
        <h1 className=" font-extrabold text-white text-center mt-2 sm:text-4xl xs:text-4xl  font-Poppins">
          Hi, Iam NProject
        </h1>
        <h1 className=" font-extrabold text-white text-center mt-2 mb-5 sm:text-4xl xs:text-4xl  font-poppins">
          As
          <span className="text-[#CBA033]">Web Developer & UI/UX Design</span>
        </h1>
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
          alt="Deskripsi Gambar"
          className="w-60 h-auto absolute top-4 right-[-18rem]" // Tambahkan margin kiri negatif di sini
        />

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
