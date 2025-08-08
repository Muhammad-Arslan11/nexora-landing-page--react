import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../../export.js";

function Portfolio() {
   useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []);
    
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio