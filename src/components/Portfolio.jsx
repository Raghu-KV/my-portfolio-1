import React from "react";
import Array from "../assets/portfolio/arrayDestruct.jpg";
import ReactPlayer from "../assets/portfolio/reactPlayer.png";

function Portfolio() {
  const project = [
    {
      id: 1,
      name: ReactPlayer,
      dis: "Local music player with react",
      demo: "https://dapper-truffle-aa2aa2.netlify.app",
      code: "https://github.com/Raghu-KV/music-player.git",
    },
    // {
    //   id: 2,
    //   name: Array,
    //   dis: "this project is about CURD oprations",
    //   demo: "#",
    // },
    // {
    //   id: 3,
    //   name: Array,
    //   dis: "this project is about CURD oprations",
    //   demo: "#",
    // },
    // {
    //   id: 4,
    //   name: Array,
    //   dis: "this project is about CURD oprations",
    //   demo: "#",
    // },
    // {
    //   id: 5,
    //   name: Array,
    //   dis: "this project is about CURD oprations",
    //   demo: "#",
    // },
  ];

  return (
    <div name="Portfolio" className="container mx-auto items-center mb-24">
      <div className="px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent text-5xl">
            Portfolio
          </span>
        </div>
        <div className="flex flex-wrap justify-center">
          {project.map(({ name, dis, id, demo, code }) => (
            <div className="w-full md:w-1/2 lg:w-1/3" key={id}>
              <div className="border border-sky-500 rounded-lg mx-2 my-2">
                <div>
                  <img src={name} alt="" className="rounded-t-lg" />
                </div>
                <p className="text-center my-4 text-gray-400 text-base md:text-lg">
                  {dis}
                </p>
                <div className="flex justify-center mb-4 mx-6">
                  <a
                    className="text-center block  text-base rounded-lg border border-sky-500 py-2 px-4 text-cyan-400 hover:bg-sky-500 hover:text-white duration-200 w-full mx-2"
                    href={demo}
                    target="_blank"
                  >
                    Demo{" "}
                  </a>

                  <a
                    className="text-center block  text-base rounded-lg border border-sky-500 py-2 px-4 text-cyan-400 hover:bg-sky-500 hover:text-white duration-200 w-full mx-2"
                    href={code}
                    target="_blank"
                  >
                    Code{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
