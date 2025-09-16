import React from "react";
import Image from "next/image";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="flex-container" id="home">
        <section className="hero">
          <div className="hero-content">
            <h1>Crafted for</h1>
            <p> Every Heart</p>
          </div>
        </section>
        <section className="hero-image">
          <Image
            src="/hero-2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="hero-2"
          />
        </section>
      </div>
    </>
  );
};

export default Hero;
