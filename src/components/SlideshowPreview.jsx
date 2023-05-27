import React from "react";
import { Link } from 'react-router-dom';
import './slideshow.css';
import imageNull from '../pages/image.png';

function SlideshowPreview(props) {
  let title = props.item.original_title || props.item.name;
  let releaseDate = props.item.release_date || props.item.first_air_date;
  let shortDesc = props.item.overview;
  let voteAverage = parseFloat(props.item.vote_average).toFixed(1);
  let truncatedTitle = title.slice(0, 40);
  
  return (
    <Link to={`/moviedetail/${props.item.id}`} className="moviecont">
      <div className="slideshowcont">
        <div className="slide">
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.item.backdrop_path}`}
          alt="Alternate Text"
          onError={(e) => {
            e.target.onerror = imageNull;
            e.target.src = imageNull;
          }}
          className='backdrop'
        />
        <div className="grad">
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.item.poster_path}`}
          alt="Alternate Text"
          onError={(e) => {
            e.target.onerror = imageNull;
            e.target.src = imageNull;
          }}
          className='poster'
        />
        <div id="detail">
        <div id="ratings">{voteAverage} ★</div>
        <div className="movie_names" title={title}>{truncatedTitle}</div>
        <div className="movie_releasedates">{releaseDate}</div>
        <div className="movie_desc">{shortDesc}</div>
        </div>
        </div>
        <div className="viewmore">
            <div className="seemore"><button id='btnsee'>View More</button></div>
        </div>
        </div>
      </div>
    </Link>
  );
}

export default SlideshowPreview;