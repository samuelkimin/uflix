import React from "react";
import MovieList from "../components/MovieList";
import Slideshow from "../components/Slideshow";
// import AdBanner from "../components/AdBanner";
import '../styles.css';
import AdRow from "../components/AdRow";
import AdBanner from "../components/AdBanner";
// import PopunderLoader from "../components/PopunderLoader";
import PopunderHead from "../components/PopunderHead";

function OtherPage() {

  return (
    <div>
      <Slideshow />
      <AdRow />
      <AdBanner />
      <MovieList movieType={"movie"} />
      <PopunderHead />
    </div>
  );
}

export default OtherPage;