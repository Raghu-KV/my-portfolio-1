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
            className="text-white text-md"
            target="_blank"
          >
            <div className="mt-4 border px-4 py-2 rounded-full">Github</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1vQ9hLXMOc_8PX9gBusuW3a8nVEK4xmjb/view"
            className="text-white text-md"
            target="_blank"
          >
            <div className="mt-4 border px-4 py-2 rounded-full">
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
