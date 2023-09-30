import React from "react";
import "../styles/Hero.css";
import grid1 from "../assets/grid.136a9256d16888900db0.svg.svg";
import grid2 from "../assets/g.136a9256d16888900db0.svg.svg";
import arrow from "../assets/arrow-right.svg";
import picture1 from "../assets/AdobeStock_362497671 1.png";
import picture2 from "../assets/AdobeStock_400053098 1.png";
import picture3 from "../assets/woman-using-smartphone-technology 2.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="cc-container">
        <div className="frame-1">
          <h1>Show Them Don’t Just Tell</h1>
          <p className="text">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button>
            <p>Install HelpMeOut</p> <img src={arrow} alt="" />
          </button>
        </div>
        <div className="frame-2">
          <div>
            <img src={picture2} alt="" />
            <img src={picture1} alt="" />
          </div>
          <div>
            <img src={picture3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
