import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { reviews } from "../../export.js";
import { FaStar } from "react-icons/fa";
import backgroundImage from "../assets/hero_bg.jpg";

function CTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="contacts"
      className="w-full h-auto flex flex-col justify-center items-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-emerald-400 uppercase text-sm font-poppins lg:text-2xl"
      >
        Ready To Get Started
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-white lg:text-[45px] text-[30px] leading-[1.2em] capitalize font-poppins lg:w-[50%] w-full text-center"
      >
        Let's Elevate Your Business With Us
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-300 text-md font-poppins text-center lg:w-[60%] w-full"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
        saepe modi?
      </p>
      <div
        id="two-buttons"
        className=" flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-1 mt-5"
      >
        <button className="bg-emerald-400 hover:bg-white hover:text-black text-white gap-1 py-4 px-6 rounded-md  text-md mt-5 font-semibold"> CONTACT US
        </button>
        <button className="bg-emerald-400 hover:bg-white hover:text-black text-white gap-1 py-4 px-6 rounded-md  text-md mt-5 font-semibold">REACH US
        </button>
      </div>
    </div>
  );
}

export default CTA;
