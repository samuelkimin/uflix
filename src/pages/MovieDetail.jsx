import React, { useEffect, useState } from "react";
import { getMovieDetail, watchMovie } from "../api.js";
import { useParams, useNavigate } from "react-router-dom";
import imageNull from "./image.png";
import backImage from "../assets/back.png";
import "./MovieDetail.css";
import MovieList from "../components/MovieList";
import "../components/MovieList.css";
import muteIcon from "../assets/mute.png";
import unmuteIcon from "../assets/unmute.png";

function MovieDetail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  useEffect(() => {
    getMovieDetail(id).then((data) => setMovieData(data));
    window.scrollTo(0, 0);

    watchMovie(id).then((videoData) => {
      const videoResults = videoData;
      if (videoResults && videoResults.length > 0) {
        const videoKey = videoResults[0].key;
        const url = `https://www.youtube.com/embed/${videoKey}`;
        setVideoUrl(url);
        setVideoId(videoKey);
      }
    });
  }, [id]);

  const {
    original_title,
    name,
    release_date,
    first_air_date,
    poster_path,
    backdrop_path,
    overview,
    vote_average,
    runtime,
    genres,
  } = movieData;
  const title = original_title || name;
  const releaseDate = release_date || first_air_date;
  let voteAverage = parseFloat(vote_average).toFixed(1);

  const handleGoBack = () => {
    navigate(-1); // Navigating back by specifying -1
  };
  const genreNames = genres ? genres.map((genre) => genre.name).join(", ") : "";

  const handleUnmute = () => {
    setIsMuted((prevState) => !prevState);
  };

  return (
    <div className="detailcont">
      <div className="dgrad"></div>
      <div className="firstcont">
        <button onClick={handleGoBack} id="back">
          <img src={backImage} id="backimg" alt="Back" />
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
          alt="Backdrop"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imageNull;
          }}
          className="backdropimg"
        />
        <div className="topdetail">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Please Wait..."
            onError={(e) => {
              e.target.onerror = imageNull;
              e.target.src = imageNull;
            }}
            className="imgdt"
          />
          <div className="detailtext">
            <h2 id="dtitle" class="marquee">
              {title}
            </h2>
            <div className="dinfo">
              <div id="dratings">
                <p>{voteAverage}</p>
              </div>
              <div id="rdate">
                <p>
                  {" "}
                  {releaseDate} • {runtime}m • {genreNames}
                </p>
              </div>
            </div>
            <p className="ovtext">{overview}</p>
          </div>
        </div>
      </div>
      {/* <div className="dbvideo">
        {videoUrl && (
          <iframe
            src={`${videoUrl}?controls=0&loop=1&autoplay=1&mute=1&playlist=${videoId}`}
            loop autoplay
            width="2000"
            height="1000"
            frameBorder="0"
            allowFullScreen
            title="Movie Video"
            className="dbtrailer"
          />
        )}
        <div id="dbvgrad"></div>
      </div> */}
      <div className="dvideo">
        <div className="dtitletrailer">
          <h2>Trailer</h2>
        </div>
        {videoUrl && (
          <iframe
            src={`${videoUrl}?controls=0&loop=1&autoplay=1&mute=${
              isMuted ? 1 : 0
            }&rel=0&playlist=${videoId}`}
            loop
            autoPlay
            width="1000"
            height="500"
            frameBorder="0"
            allowFullScreen
            title="Movie Video"
            className="dtrailer"
          />
        )}
        <button onClick={handleUnmute} className="mbtn">
          {isMuted ? <img src={muteIcon} /> : <img src={unmuteIcon} />}
        </button>
      </div>
      <div className="recom">
        <MovieList />
      </div>
    </div>
  );
}

export default MovieDetail;
