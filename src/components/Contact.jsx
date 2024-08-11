import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-neutral-900 text-white flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5a9f7b84-540b-45b3-9758-2f60cdac224f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 test">
          <p className="text-4xl font-bold inline border-b-4 border-neutral-500">
            Contact
          </p>
          <p className="py-4 ">
            Submit the form below or email me! -{" "}
            <span className="font-bold select-all">
              kylelaguerta989@gmail.com
            </span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 focus:outline-none focus:border-neutral-500 focus:ring-4 focus:ring-neutral-500 text-black"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6] focus:outline-none focus:border-neutral-500 focus:ring-4 focus:ring-neutral-500 text-black"
          type="text"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2  focus:outline-none focus:border-neutral-500 focus:ring-4 focus:ring-neutral-500 text-black"
          placeholder="Message"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto hover:bg-neutral-800 hover:border-neutral-800 flex items-center">
          Submit Form!
        </button>
      </form>
    </div>
  );
};

export default Contact;
