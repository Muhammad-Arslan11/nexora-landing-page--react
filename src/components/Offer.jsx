import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../../export.js";

function Offer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="w-full flex flex-col justify-between items-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-emerald-400 uppercase text-sm font-poppins lg:text-2xl"
      >
        Our Services
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-black text-center lg:text-[45px] text-[30px] leading-[1.2em] capitalize font-poppins lg:w-[50%]"
      >
        Driving Digital Transformation with Excellence
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-500 text-md font-poppins text-center lg:w-[60%]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
        saepe modi?
      </p>

      <div className="w-full grid lg:grid-cols-3 gird-cols-1 justify-center items-center gap-6 mt-6">
        {services.map((service, index) => {
          return (
            <div
              key={index}
             className="flex flex-col items-start justify-center gap-4 p-10 border-2 border-gray-200 bg-white hover:bg-green-200 rounded-md hover:cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-102"

            >
              {<service.icon className="size-[35px] mb-5" />}
              <h1 className="text-black text-[25px] leading-[1.2em] capitalize font-poppins">
                {service.title}
              </h1>
              <p className="text-gray-500 text-md font-poppins">
                {service.para}
              </p>
              <button className="bg-emerald-400 hover:bg-black hover:text-white hover:cursor-pointer text-black py-4 px-4 font-semibold text-sm mt-10">
                LEARN MORE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Offer;
