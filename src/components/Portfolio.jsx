import React from "react";
import ReactPlayer from "../assets/portfolio/reactPlayer.png";
import GithubFinder from "../assets/portfolio/reactFinder.png";
import UrlShortner from "../assets/portfolio/url-shortner.jpg";
import SocketChat from "../assets/portfolio/chat.jpg";

function Portfolio() {
  const project = [
    {
      id: 1,
      name: ReactPlayer,
      dis: "Local music player with react",
      demo: "https://dapper-truffle-aa2aa2.netlify.app",
      codeFE: "https://github.com/Raghu-KV/music-player.git",
      // codeBE: "https://github.com/Raghu-KV/music-player.git",
    },
    {
      id: 2,
      name: GithubFinder,
      dis: "A project to serch github users",
      demo: "https://github-finder-eta-puce.vercel.app",
      codeFE: "https://github.com/Raghu-KV/github-finder.git",
    },
    {
      id: 3,
      name: UrlShortner,
      dis: "URL shortner with login module",
      demo: "https://make-it-short.netlify.app",
      codeFE: "https://github.com/Raghu-KV/url-shortner-frontend.git",
      codeBE: "https://github.com/Raghu-KV/url-shortner-backend.git",
    },
    {
      id: 4,
      name: SocketChat,
      dis: "Chat app which uses Socket.io",
      demo: "https://inspiring-praline-5cc027.netlify.app",
      codeFE: "https://github.com/Raghu-KV/scoket-chat-front-end.git",
      codeBE: "https://github.com/Raghu-KV/scoket-chat-back-end.git",
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
          {project.map(({ name, dis, id, demo, codeFE, codeBE }) => (
            <div className="w-full md:w-1/2 lg:w-1/3" key={id}>
              <div className="border border-sky-800 rounded-lg mx-2 my-2">
                <div>
                  <img src={name} alt="" className="rounded-t-lg" />
                </div>
                <p className="text-center my-4 text-gray-400 text-base md:text-lg">
                  {dis}
                </p>
                <div className="flex justify-center mb-4 mx-6">
                  <a
                    className="text-center block  text-sm rounded-full border border-sky-900 hover:bg-sky-900 py-2 px-4 text-cyan-400  duration-200  mx-2 hover:text-white"
                    href={codeFE}
                    target="_blank"
                  >
                    code FrontEnd{" "}
                  </a>
                  {codeBE && (
                    <a
                      className="text-center block  text-sm rounded-full border border-sky-800 py-2 px-4 text-cyan-400 hover:bg-sky-900 hover:text-white duration-200  mx-2"
                      href={codeFE}
                      target="_blank"
                    >
                      code BackEnd{" "}
                    </a>
                  )}
                </div>
                <div>
                  <a
                    className="text-center block text-white rounded-b-md bg-sky-800 py-2 px-4  hover:bg-sky-900 hover:text-white duration-200 w-full tracking-widest text-lg"
                    href={demo}
                    target="_blank"
                  >
                    Live Preview
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
