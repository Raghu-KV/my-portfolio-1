import React from "react";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="Home" className="w-full">
      <div className="container mx-auto flex items-center justify-center text-center h-screen">
        <div className="my-9">
          <p className="text-base text-gray-400 md:text-xl font-light">
            Hello there I'm{" "}
            <span className="text-xl md:text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent mx-2">
              Raghu Nandan K V
            </span>
          </p>
          <h1 className=" text-5xl md:text-8xl  text-gray-300 font-bold my-4 mx-4">
            Fullstack web developer
          </h1>
          <p className="text-base text-gray-400 md:text-xl font-ligh mx-7">
            I enjoy creating things that live on the internet
          </p>
          <div className=" my-10">
            <Link to="Portfolio" smooth duration={800} offset={-150}>
              <button className="py-2 px-8 text-white md:my-3 md:py-3 md:px-9 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:text-black duration-300">
                {" "}
                Check out my{" "}
                <span className=" text-base ml-1 font-bold md:text-xl">
                  Portfolio !
                </span>{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="ml-9">
          <img src={myImage} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
