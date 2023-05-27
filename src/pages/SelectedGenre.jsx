import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGenreData } from "../api";
import MoviePreview from "../components/MoviePreview";
import "./SelectedGenre.css";
import backImage from '../assets/back.png';

function SelectedGenre() {
  const { genreId } = useParams();
  const [genreData, setGenreData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };

  const genreName = genreMap[genreId];

  useEffect(() => {
    getGenreData(genreId).then((data) => {
      setGenreData(data);
    });
  }, [genreId]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    getGenreData(genreId, nextPage)
      .then((data) => {
        setGenreData((prevData) => [...prevData, ...data]);
        setCurrentPage(nextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoBack = () => {
    navigate(-1); // Navigating back by specifying -1
  };

  return (
    <div className="selected-genre-container">
      <button onClick={handleGoBack} id="gback"><img src={backImage} id="backimg" alt="Back" /></button>
      <h2 className="gch1">Movie Lists for {genreName} Genre</h2>
      <div id="cbarcont">
        {genreData.map((item) => (
          <MoviePreview key={item.id} item={item} className="cmoviepreview" />
        ))}
      </div>
      <button onClick={handleLoadMore} className="morebutton">Load More</button>
    </div>
  );
}

export default SelectedGenre;
