import React from "react";
import { Link } from 'react-router-dom';
import peopleNull from '../pages/people.png';

function CastPreview(props) {
  let castName = props.cast.name;

  return (
    <Link to={`/castdetail/${props.cast.id}`}>
      <div className="movie_item">
      <img
          src={`https://image.tmdb.org/t/p/w300/${props.cast.profile_path}`}
          alt="Alternate Text"
          onError={(e) => {
            e.target.onerror = peopleNull;
            e.target.src = peopleNull;
          }}
        />

        <div className="cast_name">{castName}</div>
      </div>
    </Link>
  );
}

export default CastPreview;