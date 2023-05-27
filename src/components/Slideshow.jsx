import React, { useEffect, useState } from "react";
import { getTrendingMovieData } from "../api.js";
import SlideshowPreview from "../components/SlideshowPreview";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./slideshow.css"; // Import your transition styles

function Slideshow() {
  const [trendingMovieData, setTrendingMovieData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getTrendingMovieData("movie").then((data) => {
      setTrendingMovieData(data);
      startSlideshow();
    });
  }, []);

  const startSlideshow = () => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === 19) {
          return 0;
        } else {
          const nextSlide = prevSlide + 1;
          return nextSlide < 20 ? nextSlide : prevSlide;
        }
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  };

  if (trendingMovieData.length === 0) {
    return <div className="trending-container">Loading...</div>;
  }

  return (
    <div>
      <div className="trending-container">
        <TransitionGroup>
          <CSSTransition
            key={currentSlide}
            classNames="slide-transition"
            timeout={1000}
          >
            <SlideshowPreview
              key={trendingMovieData[currentSlide].id}
              item={trendingMovieData[currentSlide]}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Slideshow;
