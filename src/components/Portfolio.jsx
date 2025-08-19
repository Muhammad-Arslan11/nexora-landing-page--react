import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../../export.js";
import backgroundImage from "../assets/hero_bg.jpg";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="portfolio"
      className="w-full h-auto flex flex-col justify-center items-center lg:px-[80px] lg:py-[80px] px-[20px] py-[60px] gap-[20px] bg-cover bg-center"
      data-aos="zoom-in"
    data-aos-delay="50"

      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-emerald-400 uppercase text-sm font-poppins lg:text-2xl"
      >
        Our Portfolio
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-white lg:text-[45px] text-[30px] leading-[1.2em] capitalize font-poppins lg:w-[50%]"
      >
        Explore our Portfolio and Showcase our best Works
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-300 text-md font-poppins text-center lg:w-[60%]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
        saepe modi?
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1
 justify-center items-center gap-10 mt-8">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-start gap-4 p-10 border-2 border-gray-200 bg-white  rounded-md hover:cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-102"
            >
              <img
                src={project.img}
                alt=""
                className="w-full bg-cover bg-center"
              />
              <div className="w-full flex flex-col items-start justify-center bg-gray-600  gap-4 p-8">
                <h1 className="text-white lg:text-[25px] text-[20px] text-left leading-[1.2em] capitalize font-poppins">
                  {project.title}
                </h1>
                <p className="text-gray-300 font-sm font-poppins">{project.para}</p>
              </div>

           <button className="bg-emerald-400 hover:bg-black hover:text-white hover:cursor-pointer text-black py-4 px-4 font-semibold text-sm mt-10">
                VIEW MORE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
