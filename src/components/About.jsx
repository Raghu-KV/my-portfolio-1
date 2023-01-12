import React from "react";
import Hero from "../assets/heroImage.png";

const About = () => {
  return (
    <div name="About" className="container mx-auto flex items-center mb-20">
      <div className="px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent text-5xl">
            About me
          </span>
        </div>
        <p className=" text-gray-400 text-base text-justify  md:text-xl">
          I'm Raghu Nandan K V who has an interest in creating web applications,
          someone who is highly motivated to learn, and is likely always looking
          for new opportunities to acquire knowledge and improve my skills. I'm
          proactive in seeking out new challenges and open to new ideas and
          perspectives
        </p>
        <br />
        {/* <p className=" text-gray-400 text-base text-justify  md:text-xl">
          {" "}
          I'm proactive in seeking out new challenges and open to new ideas and
          perspectives
        </p> */}
      </div>
      <div className=" ml-14 hidden xl:w-full xl:block">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default About;
