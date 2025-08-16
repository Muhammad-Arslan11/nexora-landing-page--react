import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <header className="lg:px-[80px] px-7 bg-black fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="font-bold text-left text-3xl lg:text-4xl bg-emerald-400 uppercase">
          Nexora<span className="text-white">.</span>
        </div>

        {/* Hamburger menu (mobile only) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-poppins text-white">
            {menuLinks.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer ${
                    item.name === 'Home'
                      ? 'text-emerald-400'
                      : 'hover:text-emerald-400 transition-colors'
                  }`}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* mobile menu full screen */}
      <div className={`w-full h-full fixed top-0 left-0 bg-black text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex items-center justify-center overflow-y-hidden`}>
        <IoCloseSharp className="fixed top-3 right-6 text-3xl cursor-pointer" onClick={()=> setOpenMenu(false)}/>

          <ul className="flex space-y-6 text-2xl font-poppins text-center">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer ${
                    link.name === 'Home'
                      ? 'text-emerald-400'
                      : 'hover:text-emerald-400 transition-colors'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
      </div>
    </header>
  );
}

export default Header;