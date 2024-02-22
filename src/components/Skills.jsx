import React from "react";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Php from "../assets/php.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png.png";
import mysql from "../assets/mysql.png";
import socket from "../assets/socket.png";
import express from "../assets/Expressjs.png";
import zustand from "../assets/zustand.png";
import axios from "../assets/axios.png";
import postman from "../assets/postman.png";
import jwt from "../assets/jwt.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-neutral-900 text-white"
    >
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-neutral-500">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={Html}
              alt="HTML icon"
            ></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={Css}
              alt="CSS icon"
            ></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={Javascript}
              alt="JS icon"
            ></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={Php}
              alt="JS icon"
            ></img>
            <p className="my-4">Php</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={mongodb}
              alt="JS icon"
            ></img>
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={mysql}
              alt="JS icon"
            ></img>
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={socket}
              alt="JS icon"
            ></img>
            <p className="my-4">Socket.IO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={Tailwind}
              alt="Tailwind icon"
            ></img>
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={react}
              alt="React icon"
            ></img>
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={express}
              alt="React icon"
            ></img>
            <p className="my-4">Express</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={nodejs}
              alt="React icon"
            ></img>
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={zustand}
              alt="React icon"
            ></img>
            <p className="my-4">Zustand</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={axios}
              alt="React icon"
            ></img>
            <p className="my-4">Axios</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={postman}
              alt="React icon"
            ></img>
            <p className="my-4">Postman</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto min-h-24"
              src={jwt}
              alt="React icon"
            ></img>
            <p className="my-4">JWT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
