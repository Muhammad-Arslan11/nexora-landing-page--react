import React, { useEffect } from "react";
import aboutImg from "../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col justify-between items-center lg:px-[80px] lg:py-[80px] px-[60px] py-[20px]"
    >
      <div
        id="top-box"
        className="w-full h-auto flex flex-col justify-center items-center gap-[60px]"
      >
        <h1 className="text-emerald-400 uppercase text-sm font-poppins lg:text-2xl">
          Who We Are?
        </h1>
        <h1 className="text-black lg:text-[45px] text-[30px] leading-[1.2em] capitalize font-poppins">
          Dilevering Excellence in IT Solutions
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="170"
          className="text-gray-500 text-md font-poppins"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
          saepe modi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad nisi laboriosam voluptatem totam nulla necessitatibus perferendis?
          Sequi eveniet corporis molestias. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatibus id vel maxime omnis! Magnam
          consequatur veniam, perferendis labore deleniti animi voluptatibus
          sapiente molestias dolor repudiandae accusamus soluta aperiam nisi
          placeat ipsum eaque sit! Amet impedit eum dolorem beatae, nihil eius
          ratione quos odio a assumenda dolore molestias quia autem nisi?
        </p>

        <div className="lg:w-[40%] w-full flex lg:justify-center justify-center items-center mb-10">
          <button className="bg-emerald-400 hover:bg-black hover:text-white hover:cursor-pointer text-black py-4 px-4 mt-5 font-semibold text-md rounded-md">
            LEARN MORE
          </button>
        </div>
      </div>
      <div
        id="bottom-box"
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-[80px] mt-10"
      >
        <div id="image-box" className="lg:w-[40%] w-full">
          <img src={aboutImg} alt="" className="w-full bg-cover bg-center" />
        </div>
        <div
          id="content-box"
          className="lg:w-[60%] w-full flex flex-col justify-between items-center gap-[60px]"
        >
          <div className="flex flex-col justify-between items-center gap-3">
            <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">
              Expertise
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="170"
              className="text-gray-500 text-md font-poppins"
            >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
          saepe modi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad nisi laboriosam voluptatem totam nulla necessitatibus perferendis?
          Sequi eveniet corporis molestias. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatibus id vel maxime omnis! Magnam
            </p>
            <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">
              Security
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="170"
              className="text-gray-500 text-md font-poppins"
            >
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
          saepe modi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad nisi laboriosam voluptatem totam nulla necessitatibus perferendis?
          Sequi eveniet corporis molestias. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatibus id vel maxime omnis! Magnam
            </p>
            <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">
              Scalability
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="170"
              className="text-gray-500 text-md font-poppins"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
          saepe modi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad nisi laboriosam voluptatem totam nulla necessitatibus perferendis?
          Sequi eveniet corporis molestias. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatibus id vel maxime omnis! Magnam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
