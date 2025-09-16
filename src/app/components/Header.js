"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add top padding so page content is not hidden under fixed header
  useEffect(() => {
    const headerHeight = "64px";
    // Set body padding so content starts below header
    const previousPaddingTop = document.body.style.paddingTop || "";
    document.body.style.paddingTop = headerHeight;
    // also set scroll-padding for smooth anchor scrolling
    const prevScrollPad = document.documentElement.style.scrollPaddingTop || "";
    document.documentElement.style.scrollPaddingTop = headerHeight;

    return () => {
      document.body.style.paddingTop = previousPaddingTop;
      document.documentElement.style.scrollPaddingTop = prevScrollPad;
    };
  }, []);

  // Close menu when clicking a nav link and smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close menu
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div
          className="logo-image"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          <Image
            src="/logo.png"
            alt="JS Foods logo"
            width={48}
            height={48}
            priority
          />

          <div className="logo">JS Foods</div>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          // aria-hidden={!open && window?.innerWidth < 768}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
            About
          </a>
          <a href="#products" onClick={(e) => handleNavClick(e, "#products")}>
            Products
          </a>

          <a
            href="#contact"
            className="contact-link"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
