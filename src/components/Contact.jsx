import React from "react";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="border-t container mx-auto border-gray-600 pb-12"
      name="Contact"
    >
      <div className="mb-8 text-center mt-12">
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent text-5xl">
          Contact
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <a
            href="mailto:raghunandanv19@gmail.com"
            className="text-white text-2xl"
          >
            raghunandanv19@gmail.com
          </a>
        </div>
        {/*  */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Raghu-KV"
            className="text-white text-md "
            target="_blank"
          >
            <div className="mt-4 border px-4 py-2 rounded-full hover:bg-sky-900 duration-200">
              Github
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1gPBkAckn5EePJjZnQ9BmHit6WkVuXP3X/view"
            className="text-white text-md"
            target="_blank"
          >
            <div className="mt-4 border px-4 py-2 rounded-full hover:bg-sky-900 duration-200">
              Download CV
            </div>
          </a>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Contact;
