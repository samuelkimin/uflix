import React from "react";
import { Link } from "react-router-dom";
import "./MoviePreview.css"; // gunakan css yang sama
import imageNull from "../pages/image.png";

function TvPreview({ item }) {
  const title = item.name || item.original_name;
  const releaseDate = item.first_air_date || "Unknown";
  const voteAverage = item.vote_average
    ? parseFloat(item.vote_average).toFixed(1)
    : "N/A";
  const truncatedTitle = title.slice(0, 40);

  return (
    <Link to={`/tvdetail/${item.id}`} className="moviecont">
      <div className="movie_item">
        <div className="posterdiv">
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt="TV Poster"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = imageNull;
            }}
          />
          <div id="rating">{voteAverage}</div>
        </div>

        <div id="details">
          <div className="movie_name" title={title}>
            {truncatedTitle}
          </div>
          <div className="movie_releasedate">{releaseDate}</div>
        </div>
      </div>
    </Link>
  );
}

export default TvPreview;
