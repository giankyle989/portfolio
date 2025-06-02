import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";
import Resume from '../assets/Resume.pdf'
const Hero = () => {
  return (
    <div name='home' className="h-screen bg-neutral-900 text-white">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi! My name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold">Gian Kyle Laguerta</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">I'm a Web Developer</h2>

        <div className="flex my-4">
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-neutral-800 ">
              View Projects
              <span className="ml-3 group-hover:rotate-90 duration-200 ">
                <FaLongArrowAltRight />
              </span>
            </button>
          </Link>
          <a  href={Resume} download>
            <button className="text-white group border-2 px-6 py-3 mx-4 my-2 flex items-center hover:bg-neutral-800">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
