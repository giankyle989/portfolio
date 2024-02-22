import React from "react";

const Item = ({ image, title, desc, tech, demo, code }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/** Image */}
      <div>
        <img src={image} />
      </div>

      {/** Descriptions */}
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <p className="text-sm">{desc}</p>
        <h2 className="font-bold">
          Technologies: <span className="font-normal">{tech}</span>
        </h2>
        <div className="py-8 text-center">
          <a href={demo} target="_blank" rel="noreferrer noopener">
            <button className="text-center px-4 py-3 m-2 border-2 text-white hover:bg-neutral-800">
              Demo
            </button>
          </a>
          <a href={code} target="_blank" rel="noreferrer noopener">
            <button className="text-center  px-4 py-3 m-2 border-2 text-white hover:bg-neutral-800">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
