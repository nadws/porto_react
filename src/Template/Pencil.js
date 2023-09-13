import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Pencil() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <motion.div
      style={{
        width: "10px",
        height: "200px",
        background: "gray",
        position: "absolute",
        left: mousePosition.x,
        top: mousePosition.y,
        transformOrigin: "top",
        transform: `rotate(-45deg)`,
      }}
    ></motion.div>
  );
}

export default Pencil;
