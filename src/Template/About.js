import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function About() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0D1018] ">
      <div className="bg-[#161B22] shadow-md rounded-lg  mx-auto lg:w-10/12 card">
        {/* Card Header */}
        <div className="bg-[#161B22] border border-[#30363D] text-white py-2 px-4 ">
          <h2 className="text-2xl font-semibold flex items-center">
            <BiChevronLeft className="mr-2" />
            <BiChevronRight />
          </h2>
        </div>

        {/* Card Body */}

        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* Kolom 1 */}
          <div className="bg-[#0D1018] border text-[#4a545f] text-center border-[#30363D] rounded-lg p-4 w-1/12 flex flex-col  items-center">
            <GiHamburgerMenu className="w-6 h-6" />
          </div>

          {/* Kolom 2 */}
          <div className="bg-[#0D1018] border text-[#4a545f]  border-[#30363D] rounded-lg p-4 w-11/12 ">
            <div className="bg-[#0D1018] rounded-lg p-4 lg:w-12/12 ">
              <p className="font-Montserrat mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                1 /**
              </p>
              <p className="font-Montserrat mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                2 * Hello my name is nanda wahyudi
              </p>
              <p className="font-Montserrat mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                3 * Full stack developer since 2020
              </p>
              <p className="font-Montserrat mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                4 * SQL/NoSQL database architecture, designing and developing
              </p>
              <p className="font-Montserrat mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                5 * Very good at programming with PHP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
