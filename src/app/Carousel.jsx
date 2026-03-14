"use client";
import { useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
  ];

  const [index, setIndex] = useState(0);

  function next() {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function prev() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }

  return (
    <div className="carousel">
      <button onClick={prev} className="btn">
        Prev
      </button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} />
          ))}
        </div>
      </div>

      <button onClick={next} className="btn">
        Next
      </button>
    </div>
  );
}
