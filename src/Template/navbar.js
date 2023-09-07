import React from "react";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto font-Poppins">
        <div className="flex justify-between items-center">
          <div className="text-[#4C5361] text-2xl font-bold">Portofolio</div>

          <ul className="flex space-x-12">
            <li>
              <a
                href="#"
                className="text-[#4C5361] hover:text-blue-300 text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#4C5361] hover:text-blue-300 text-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#4C5361] hover:text-blue-300 text-lg"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#4C5361] hover:text-blue-300 text-lg"
              >
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
