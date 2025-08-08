import React, { useEffect } from "react";
import backgroundImage from "../assets/bg2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";
import Logo8 from "../assets/logo8.png";

function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="clients"
      className="w-full h-auto flex flex-col justify-between items-center lg:px-[80px] lg:py-[80px] px-[20px] py-[60px] gap-[60px] bg-cover bg-center"
      data-aos="fade up" style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="bg-white rounded-full px-10 py-3 font-semibold flex flex-col lg:flex-row font-poppins items-center justify-center lg:gap-2 gap-3 w-full"
      >
        Trusted by <span className="bg-emerald-400">Business Worldwide</span>{" "}
        for Reliable IT Solutions
      </div>
      <div className="w-full grid lg:grid-cols-4 gird-cols-2 gap-5 ">
         <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo1} alt=""  className="w-[150px]"/>
        </div>
         <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo2} alt=""  className="w-[150px]"/>
        </div>
         <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo3} alt=""  className="w-[150px]"/>
        </div>
         <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo4} alt=""  className="w-[150px]"/>
        </div>
          <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo5} alt=""  className="w-[150px]"/>
        </div>
          <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo6} alt=""  className="w-[150px]"/>
        </div>
          <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo7} alt=""  className="w-[150px]"/>
        </div>
          <div
          data-aos="slide up"
          data-aos-delay="100"
          className="border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center"
        ><img src={Logo8} alt=""  className="w-[150px]"/>
        </div>
      </div>
    </div>
  );
}

export default Clients;
