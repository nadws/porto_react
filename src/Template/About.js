import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function About() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0D1018] ">
      <div className="bg-[#161B22] shadow-md rounded-lg  mx-auto lg:w-10/12 card">
        {/* Card Header */}
        <div className="bg-[#161B22] border border-[#30363D] text-white py-2 px-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold flex items-center">
            <BiChevronLeft className="mr-2 text-start" />
            <BiChevronRight className="text-start" />
          </h2>
          <h2 className="text-2xl font-extralight font-Montserrat text-center flex-1">
            About
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
              <p className="font-Montserrat text-lg mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                1. /** Hello, I am a programmer based in Indonesia, and I have
                been working in the field of programming since 2020.
              </p>
              <p className="font-Montserrat text-lg mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                2 * I have a passion for technology and enjoy solving complex
                problems through coding. Over the years, I have honed my skills
                in these technologies and gained practical experience.
              </p>
              <p className="font-Montserrat text-lg mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                3 * I specialize in using PHP with the Laravel framework, and I
                am proficient in web development using React.js and Vue.js.
                Additionally, I am highly skilled in working with SQL databases.
              </p>
              <p className="font-Montserrat text-lg mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                4 * I am always eager to learn and keep up with the latest
                developments in the world of software development. In my free
                time, I like to work on personal coding projects and explore new
                programming concepts.
              </p>
              <p className="font-Montserrat text-lg mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                5 * I am a dedicated and detail-oriented individual who is
                committed to delivering high-quality software solutions.
              </p>
              <p className="font-Montserrat text-lg mb-4 cursor-pointer text-[#746B6D] hover:text-white hover:bg-[#6f7975]">
                6 * I look forward to new challenges and opportunities in the
                field of programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
