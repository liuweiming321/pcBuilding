import React, { useState, useEffect } from "react";
import "./HomeSlide.css";
// import firstSlide from "../../../assets/mainCover.jpg";
import { SlideData } from "./SlideData.js";

const HomeSlide = (props) => {
  const [index, setIndex] = useState(0); //index start from 0
  const slideLength = SlideData.length;
  const timeoutRef = React.useRef(null);
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideLength - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {SlideData.map((slide, index) => {
          return (
            <img src={slide.image} className="slide" key={index} alt={index} />
          );
        })}
      </div>

      <div className="slideshowDots">
        {SlideData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlide;
