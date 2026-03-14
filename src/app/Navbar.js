"use client";
import { useState } from "react";
import "../app/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu ${open ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
