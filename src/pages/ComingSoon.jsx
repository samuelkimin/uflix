import React, { useState, useEffect } from "react";
import MoviePreview from "../components/MoviePreview";
import { getComingSoonMovieData } from "../api.js";
import "./ComingSoon.css";

function ComingSoon() {
  const [comingSoonMovieData, setComingSoonMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getComingSoonMovies();
  }, [currentPage]);

  const getComingSoonMovies = () => {
    getComingSoonMovieData(currentPage)
      .then((data) => {
        setComingSoonMovieData((prevData) => [...prevData, ...data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="trending-containers">
      <h2 className="ch1">Upcoming Movies</h2>
      <div id="cbarcont">
        {comingSoonMovieData.map((item) => (
          <MoviePreview key={item.id} item={item} />
        ))}
      </div>
      <button onClick={handleLoadMore} className="morebutton">
        Load More
      </button>
    </div>
  );
}

export default ComingSoon;
