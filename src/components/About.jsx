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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla
          nisi soluta maiores consequuntur exercitationem explicabo aut
          corporis, esse laboriosam eos eum nesciunt adipisci pariatur
          repellendus mollitia quasi magnam obcaecati. A consequatur cum fugiat,
        </p>
        <br />
        <p className=" text-gray-400 text-base text-justify  md:text-xl">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla
          nisi soluta maiores consequuntur exercitationem explicabo aut
          corporis, esse laboriosam eos eum nesciunt adipisci pariatur
          repellendus mollitia quasi magnam obcaecati. A consequatur cum fugiat,
          atque quasi ad officiis suscipit alias dolore officia totam ab
          blanditiis quo, eius cupiditate! Quae eos asperiores inventore omnis,
          pariatur deserunt accusamus illum facere commodi maiores. Natus
        </p>
      </div>
      <div className=" ml-14 hidden xl:w-full xl:block">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default About;
