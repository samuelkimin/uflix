import React from "react";
import { Link } from 'react-router-dom';
import './MoviePreview.css';
import imageNull from '../pages/image.png';

function MoviePreview(props) {
  let title = props.item.original_title || props.item.name;
  let releaseDate = props.item.release_date || props.item.first_air_date;
  let voteAverage = parseFloat(props.item.vote_average).toFixed(1);
  let truncatedTitle = title.slice(0, 40);
  
  return (
    <Link to={`/moviedetail/${props.item.id}`} className="moviecont">
      <div className="movie_item">
        <div className="posterdiv">
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.item.poster_path}`}
          alt="Alternate Text"
          onError={(e) => {
            e.target.onerror = imageNull;
            e.target.src = imageNull;
          }}
        />
        <div id="rating">{voteAverage}</div>
        </div>
        <div id="details">
        <div className="movie_name" title={title}>{truncatedTitle}</div>
        <div className="movie_releasedate">{releaseDate}</div>
        </div>
      </div>
    </Link>
  );
}

export default MoviePreview;