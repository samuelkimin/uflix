import React, { useEffect, useState, useRef } from "react";
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
  const [showPlayer, setShowPlayer] = useState(false);

  const navigate = useNavigate();
  const trailerRef = useRef(null);
  const ytPlayer = useRef(null);

  // Load YouTube Player API only once
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      if (trailerRef.current && videoId) {
        ytPlayer.current = new window.YT.Player(trailerRef.current, {
          events: {},
        });
      }
    };
  }, [videoId]);

  useEffect(() => {
    getMovieDetail(id).then((data) => setMovieData(data));
    window.scrollTo(0, 0);

    watchMovie(id).then((videoData) => {
      const videoResults = videoData;
      if (videoResults && videoResults.length > 0) {
        const videoKey = videoResults[0].key;
        const url = `https://www.youtube.com/embed/${videoKey}`;
        setVideoId(videoKey);
        setVideoUrl(url);
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
  const voteAverage = vote_average ? parseFloat(vote_average).toFixed(1) : "N/A";
  const genreNames = genres ? genres.map((g) => g.name).join(", ") : "";

  const isSeries = !!first_air_date;

  // Videasy URL
  const videasyMovieURL = `https://player.videasy.net/movie/${id}`;
  const videasySeriesURL = `https://player.videasy.net/tv/${id}/1/1`;

  const finalVideasyURL = isSeries ? videasySeriesURL : videasyMovieURL;

  // 🔥 PAUSE TRAILER Saat Play ditekan
  const openPlayer = () => {
    if (ytPlayer.current && ytPlayer.current.pauseVideo) {
      ytPlayer.current.pauseVideo();
    }
    setShowPlayer(true);
  };

  return (
    <div className="detailcont">
      <div className="dgrad"></div>

      <div className="firstcont">
        <button onClick={() => navigate(-1)} id="back">
          <img src={backImage} id="backimg" alt="Back" />
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
          alt="Backdrop"
          onError={(e) => (e.target.src = imageNull)}
          className="backdropimg"
        />

        <div className="topdetail">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Loading..."
            onError={(e) => (e.target.src = imageNull)}
            className="imgdt"
          />

          <div className="detailtext">
            <h2 id="dtitle">{title}</h2>

            <div className="dinfo">
              <div id="dratings">
                <p>{voteAverage}</p>
              </div>
              <div id="rdate">
                <p>
                  {releaseDate} • {runtime}m • {genreNames}
                </p>
              </div>
            </div>

            <p className="ovtext">{overview}</p>

            {/* PLAY BUTTON */}
            <button className="playbtn" onClick={openPlayer}>
              ▶ Watch on uFlix
            </button>
          </div>
        </div>
      </div>

      {/* Trailer */}
      <div className="dvideo">
        <div className="dtitletrailer">
          <h2>Trailer</h2>
        </div>

        {videoUrl && (
          <iframe
            ref={trailerRef}
            src={`${videoUrl}?controls=0&loop=1&autoplay=1&mute=${
              isMuted ? 1 : 0
            }&rel=0&playlist=${videoId}&enablejsapi=1`}
            width="1000"
            height="500"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            className="dtrailer"
          />
        )}

        <button onClick={() => setIsMuted(!isMuted)} className="mbtn">
          {isMuted ? <img src={muteIcon} /> : <img src={unmuteIcon} />}
        </button>
      </div>

      <div className="recom">
        <MovieList />
      </div>

      {/* POPUP VIDEASY PLAYER */}
      {showPlayer && (
        <div className="player-overlay">
          <div className="player-container">
            <button
              className="close-player"
              onClick={() => setShowPlayer(false)}
            >
              ✕
            </button>

            <iframe
              src={finalVideasyURL}
              allowFullScreen
              frameBorder="0"
              className="player-iframe"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
