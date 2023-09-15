import React from "react";

function Navbar() {
  return (
    <nav className="p-4 bg-[#0D1018] bg-opacity-100">
      <div className="container mx-auto font-Poppins ">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Portofolio</div>

          <ul className="flex space-x-12">
            <li>
              <a href="#" className="text-white hover:text-blue-300 text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300 text-lg">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300 text-lg">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300 text-lg">
                Contact
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
