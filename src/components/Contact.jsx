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
        <div className="mt-4">
          <a href="http://#" className="text-white">
            <FaGithub size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
