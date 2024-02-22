import React from "react";
import Crud from "../assets/Crud.png";
import RanQuote from "../assets/RandomQuote.png";
import WeatherApp from "../assets/WeatherApp.png";
import Portfolio from "../assets/Portfolio.png";
import Pokedex from "../assets/Pokedex.png";
import OneHealth from "../assets/OneHealth.png";
import Item from "./Item";
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:min-h-screen bg-neutral-900 text-white"
    >
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-neutral-500">
            Projects
          </p>
          <p className="py-4">Check out some of my recent works</p>
        </div>
        {/**GRID CONTAINER */}
        <div className="grid grid-cols-1 p-2 gap-8 ">
          {/**GRID ITEM */}
          <Item
            image={OneHealth}
            title="One Health"
            desc="OneHealth is a user-friendly web portal that have electronic prescription and uses QR codes for easy tracking of patient flow. It simplifies healthcare management, making it more efficient for both patients and healthcare providers."
            tech="MERN, TAILWINDCSS, SOCKET.IO, ZUSTAND, FULLCALENDAR, REACT-PDF, QRCODE.REACT, REACT-QR-SCANNER, RECHARTS, CLOUDINARY, JWT, AXIOS"
            demo="https://onehealth-frontend.onrender.com"
            code="https://github.com/giankyle989/OneHealth"
          />
          <Item
            image={Pokedex}
            title="Pokedex"
            desc="Pokedex is a website that is based on game called Pokemon. This app displays every Pokemon and their details with the use of PokeAPI."
            tech="REACTJS, TAILWINDCSS, AXIOS"
            demo="https://pokedex-app-7mlj.vercel.app/"
            code="https://github.com/giankyle989/pokedex-app"
          />
          <Item
            image={WeatherApp}
            title="Weather App"
            desc="Responsive website that displays the week's weather condition based on user's location"
            tech="HTML, CSS, JAVASCRIPT"
            demo="https://weather-app-murex-one.vercel.app"
            code="https://github.com/giankyle989/WeatherApp"
          />
          <Item
            image={RanQuote}
            title="Random Quote Generator"
            desc="Displays a random quote every time the user press the button. With a feature that if the user wants it to post in Twitter, the user can press a button to tweet the quote automatically."
            tech="HTML, CSS, JAVASCRIPT"
            demo="https://random-quote-machine-mu.vercel.app"
            code="https://github.com/giankyle989/RandomQuoteMachine"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
