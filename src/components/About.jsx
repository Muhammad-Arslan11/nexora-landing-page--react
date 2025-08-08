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
    <div id="about" className="w-full h-auto felx felx-col justify-between items-center lg:px-[80px] lg:py-[80px] px-[60px] py-[20px]">
      <div id="top-box" className="w-full felx lg:flex-row felx-col justify-between items-center gap-[60px]">
        <div className="lg:w-[60px] felx felx-col justify-center items-start gap-[18px]">
          <h1 className="text-emerald-400 uppercase text-sm font-poppins lg:text-2xl">
            Who We Are?
          </h1>
            <h1 className="text-black lg:text-[45px] text-[30px] leading-[1.2em] capitalize font-poppins">
            Dilevering Excellence in IT Solutions
          </h1>
           <p data-aos="zoom-in" data-aos-delay="170"className="text-gray-500 text-md font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
            saepe modi?
          </p>
        </div>
        <div className="lg:w-[40%] w-full flex lg:justify-end justify-start items-center">
          <button className="bg-emerald-400 hover:bg-black hover:text-white hover:cursor-pointer text-black py-4 px-4 mt-5 font-semibold text-md rounded-md">LEARN MORE</button>
        </div>
      </div>
      <div id="bottom-box" className="w-full felx lg:flex-row felx-col justify-between items-center gap-[80px]">
        <div id="image-box" className="lg:w-[40%] w-full">
          <img src={aboutImg} alt="" className="w-full bg-cover bg-center" />
        </div>
        <div id="content-box" className="lg:w-[60%] w-full felx felx-col justify-between items-center gap-[60px]">
          <div className="felx felx-col justify-between items-center gap-3">
            <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">Expertise</h1>
         <p data-aos="zoom-in" data-aos-delay="170"className="text-gray-500 text-md font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
            saepe modi?
          </p>
             <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">Security</h1>
         <p data-aos="zoom-in" data-aos-delay="170" className="text-gray-500 text-md font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
            saepe modi?
          </p>
             <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">Scalability</h1>
         <p data-aos="zoom-in" data-aos-delay="170"className="text-gray-500 text-md font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
            saepe modi?
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About