import React from "react";
import Image from "next/image";
import "../styles/Choose.css";

const Choose = () => {
  return (
    <>
      {/* Why Choose Us */}
      <h3 className="why-h3">WHY CHOOSE US</h3>
      <section className="why">
        <div className="why-grid">
          <div className="why-item">
            <span>👨‍🍳</span>
            <h4>Authentic</h4>
            <p>Traditional recipes</p>
          </div>
          <div className="why-item">
            <span>🌿</span>
            <h4>Fresh</h4>
            <p>High-quality ingredients</p>
          </div>
          <div className="why-item">
            <span>✅</span>
            <h4>Trusted</h4>
            <p>Exceptional service</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
