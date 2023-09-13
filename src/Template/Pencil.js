import React, { useRef, useEffect } from "react";

function Pencil() {
  const canvasRef = useRef(null);
  let drawing = false;
  let lastX = 0;
  let lastY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
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
      ctx.strokeStyle = "black";
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
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border border-gray-300"
      ></canvas>
    </div>
  );
}

export default Pencil;
