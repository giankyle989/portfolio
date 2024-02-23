import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full bg-neutral-900 p-4 text-white">
      <ul className="hidden md:flex gap-x-2 justify-end">
        <Link to="home" className="cursor-pointer">
          <li>Home</li>
        </Link>
        <Link to="skills" className="cursor-pointer">
          <li>Skills</li>
        </Link>
        <Link to="projects" className="cursor-pointer">
          <li>Projects</li>
        </Link>
        <Link to="contact" className="cursor-pointer">
          <li>Contact</li>
        </Link>
      </ul>

      <div className="flex justify-end">
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!isOpen ? <GiHamburgerMenu size={30} /> : <IoIosClose size={40} />}
        </div>
        <ul
          className={
            !isOpen
              ? "hidden"
              : "absolute top-0 left-0 w-screen h-screen bg-neutral-900 flex flex-col justify-center items-center gap-y-8"
          }
        >
          <li className="py-4 text-4xl hover:cursor-pointer">
            {" "}
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-4 text-4xl hover:cursor-pointer ">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-4 text-4xl hover:cursor-pointer">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-4 text-4xl hover:cursor-pointer">
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
