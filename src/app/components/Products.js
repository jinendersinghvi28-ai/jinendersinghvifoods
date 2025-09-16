import React from "react";
import Image from "next/image";
import "../styles/Products.css";

const Products = () => {
  return (
    <>
      <div className="products" id="products">
        <h2 className="products-text">OUR PRODUCTS</h2>
        <section className="products-container">
          <div className="card-container">
            <Image
              src="/snacks.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="card-text">Snacks</p>
          </div>
          <div className="card-container">
            <Image
              src="/sweets.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="card-text">Sweets</p>
          </div>
          <div className="card-container">
            <Image
              src="/namkeen.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="card-text">Namkeen</p>
          </div>
          <div className="card-container">
            <Image
              src="/spices.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="card-text">Spices</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
