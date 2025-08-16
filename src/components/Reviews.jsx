import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { reviews } from "../../export.js";
import { FaStar } from "react-icons/fa";



function Reviews() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="reviews"
      className="w-full h-auto flex flex-col justify-center items-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-emerald-400 uppercase text-sm font-poppins"
      >
        CLIENT VOICES
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-black lg:text-[45px] text-[30px] leading-[1.2em] capitalize font-poppins lg:w-[50%] w-full text-center"
      >
        Stories of Success from Our Clients
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-500 text-md font-poppins text-center lg:w-[60%] w-full"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        similique repellat eum sequi illo blanditiis voluptatem fugiat dicta
        saepe modi?
      </p>

      <div data-aos="slide-up" data-aos-delay="200" className="w-full grid lg:grid-cols-4 gird-cols-2 justify-center items-center lg:gap-6 gap-3 mt-6">
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-4 lg:py-12 p-5 lg:px-8 px-4 border-gray-100 hover:bg-green-100 rounded-md hover:cursor-pointer"
            >
              <button className="flex justify-center items-center bg-white gap-1 py-2 px-4 rounded-full">
                {review.rating}<FaStar className="text-yellow-500"/>
              </button>
              <p className="text-gray-500 text-sm text-left font-poppins">
                {review.about}
              </p>
              <div className="mt-5">
                <h1 className="text-emerald-500 text-md text-left font-poppins">{review.name}</h1>
                <h1 className="text-gray-700 font-semibold text-left  text-sm font-poppins capitalize">{review.role}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
