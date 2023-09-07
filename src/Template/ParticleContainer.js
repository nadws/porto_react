import React from "react";
import { particleConfig } from "../ParticleConfig"; // Import konfigurasi Particles.js
import Particles from "react-particles-js"; // Import library React Particles.js

const ParticleContainer = () => {
  return (
    <div className="particle-container">
      <Particles params={particleConfig} />
    </div>
  );
};

export default ParticleContainer;
