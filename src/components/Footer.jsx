import { reviews } from "../../export.js";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPhoneVolume,
} from "react-icons/fa";

function Footer() {
  return (
    <div  id="footer" className="w-full h-auto flex flex-col justify-center items-start lg:px-[80px] px-[20px] bg-black lg:py-[60px] py-[20px] gap-[60px]">
      <div className="w-full h-auto flex flex-col lg:flex-row  justify-between items-start gap-[25px]">

        <div className="h-[168px] text-emerald-400 text-center flex flex-col items-center  justify-between lg:items-start lg:justify-between ">
          <span className="text-white text-3xl font-bold uppercase hover:text-emerald-400 hover:cursor-pointer">
            Nexora
          </span>
          <p className="text-gray-300 font-poppins text-md lg:text-start">
            Feel free to contact us in our working hours Mon-Fri 9:00 - 18:00.
            Our team will be happy to help you.
          </p>
          <div className="text-white gap-2 flex justify-start items-center">
            {" "}
            {<FaPhoneVolume className="size-5 text-emerald-400" />}+1 (143)
            456-7890
          </div>
               <div className="text-white flex justify-center items-center gap-2">
            <FaFacebook className="text-white size-4 hover:text-emerald-400 hover:cursor-pointer" />
            <FaLinkedin className="text-white size-4 hover:text-emerald-400 hover:cursor-pointer" />
            <FaTwitter className="text-white size-4 hover:text-emerald-400 hover:cursor-pointer" />
            <FaInstagram className="text-white size-4 hover:text-emerald-400 hover:cursor-pointer" />
          </div>
        </div>

        <div className="lg:w-[15%] w-full flex flex-col justify-center items-center gap-2">
          <h1 className="flex flex-col justify-center items-start gap-4">
            Company
          </h1>
          <ul>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Home
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              About
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Blog
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Our Projects
            </li>
          </ul>
        </div>
        <div className="lg:w-[15%] w-full flex flex-col justify-center items-center gap-2">
          <h1 className="flex flex-col justify-center items-start gap-4">
            Services
          </h1>
          <ul>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Cloud Solutions
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Cyber Security
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Blog
            </li>
            <li className="text-gray-300 hover:text-emerald-400 hover:cursor-pointer">
              Our Projects
            </li>
          </ul>
        </div>

        <div className="lg:w-[30%] w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-white capitalize leading-[1.2em] font-poppins text-[23px] mb-5">
            Subscribe to Our Blogs
          </h1>
          <div className=" w-full flex flex-col justify-center items-start">
            <input
              type="text"
              placeholder="enter your email address"
              className="w-full bg-transparent border-2 border-gray-800 rounded-md"
            />
            <button className="w-full bg-emerald-400 hover:bg-white hover:text-black  py-4 px-4 rounded-md mt-5 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto flex lg:flex-row flex-col justify-between items-center border-t-2 border-gray-700 pt-6 gap-[10px]">
        <p className="font-poppins text-md text-center text-gray-300">
          Copyrights &copy; Nexora. All rights reserved
        </p>
        <ul className="text-gray-300 flex justify-center items-end gap-6">
          <li className="hover:text-emerald-400 hover:cursor-pointer">
            Terms of Use
          </li>
          <li className="hover:text-emerald-400 hover:cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-emerald-400 hover:cursor-pointer">
            Cookie Policy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
