import { useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goTo = (n) => setCurrent((n + total) % total);

  return (
    <div className="carousel-wrap">
      <div className="carousel-track-wrap">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              className="carousel-slide"
              src={src}
              alt={`Slide ${i + 1}`}
              style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
            />
          ))}
        </div>
        <button className="carousel-btn prev" onClick={() => goTo(current - 1)}>‹</button>
        <button className="carousel-btn next" onClick={() => goTo(current + 1)}>›</button>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <span className="carousel-counter">{current + 1} / {total}</span>
    </div>
  );
}