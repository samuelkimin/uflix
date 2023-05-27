import React from "react";
import MovieList from "../components/MovieList";
import Slideshow from "../components/Slideshow";
import '../styles.css';

function OtherPage() {

  return (
    <div>
      <Slideshow />
      <MovieList movieType={"movie"} />
    </div>
  );
}

export default OtherPage;