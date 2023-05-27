import { getCastDetail } from "../api.js";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import peopleImage from "./people.png";
// import "./CastDetail.css";
import backImage from "../assets/back.png";
import "./CastDetail.css";
import Cast from "./Cast";

function CastDetail() {
  const { id } = useParams();
  const [castData, setCastData] = useState({});
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  useEffect(() => {
    getCastDetail(id).then((data) => setCastData(data));
    window.scrollTo(0, 0);
  }, [id]);

  const { name, birthday, place_of_birth, profile_path, biography } =
    castData || {};

  const handleGoBack = () => {
    navigate(-1); // Navigating back by specifying -1
  };

  return (
    <div className="fcastcont">
      <div className="castcont">
        <button onClick={handleGoBack} id="back">
          <img src={backImage} id="backimg" alt="Back" />
        </button>
        <div className="imgcast">
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt="Alternate Text"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = peopleImage;
            }}
          />
        </div>
        <div className="detailcast">
          <h2>{name}</h2>
          <h3>Biography :</h3>
          <p id="cbio">{biography}</p>
          <p>Birthday: {birthday}</p>
          <p>Place of Birth: {place_of_birth}</p>
        </div>
      </div>
      <Cast />
    </div>
  );
}

export default CastDetail;
