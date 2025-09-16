import React from "react";
import Image from "next/image";
import "../styles/About.css";
const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <section>
          <Image
            src="/about.png"
            alt="Picture of the author"
            width={400}
            height={300}
            className="about-image"
          />
        </section>
        <div className="about-content">
          <h1>ABOUT US</h1>
          <p>
            JS Foods-brings authentic Indian flbvors, a diverse array of crispy
            namkeen, Indalgent stweets, and a commitment to quality. From our
            spice blends to traditional recipes, we celebrate rich culinary
            heritage.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
