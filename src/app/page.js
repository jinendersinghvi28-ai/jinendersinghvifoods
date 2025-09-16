import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Choose from "./components/Choose";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <Hero />
      {/* about section */}
      <About />
      {/* products section */}
      <Products />
      {/* choose us section */}
      <Choose />
      {/* contact us section */}
      <Contact />
    </>
  );
}
