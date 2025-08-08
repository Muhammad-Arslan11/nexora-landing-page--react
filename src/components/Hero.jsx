import React, { useEffect } from "react";
import heroImg from "../assets/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "../assets/hero_bg.jpg";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div
      id="hero"
      className="w-full h-auto flex lg:flex-row flex-col justify-between items-center px-[20px] lg:px-[80] lg:pt-[180px] pt-[120px] lg:pb-[80px] pb-[60px] gap-[40px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="lg:w-1/2 w-full flex flex-col items-start gap-[20px]">
          <h1 data-aos="zoom-in" data-aos-delay="50" className="text-emerald-400 uppercase text-sm font-poppins lg:text-2xl ">Seamless IT Services</h1>
          <h1 data-aos="zoom-in" data-aos-delay="100" className="text-white lg:text-[70px] text-[20px] leading-[1.2em] font-poppins  capitalize">Transforming Ideas into Digital Success</h1>
          <p data-aos="zoom-in" data-aos-delay="170"className="text-gray-300 text-md font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
            saepe modi?
          </p>
          <button data-aos="slide-up" data-aos-delay="200"className="bg-emerald-400 hover:bg-white hover:text-green py-4 px-5 text-black text-md rounded-md font-semibold  mt-5 cursor-pointer">Explore Solutions</button>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <div data-aos="zoom-in" data-aos-delay="230" className="lg:w-[80%] w-full flex items-center justify-center pt-5 px-5 
bg-emerald-400/10 backdrop-blur-lg
border border-white/20 
z-10 rounded-md

">
            <div className="opacity-100">
                <img src={heroImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
