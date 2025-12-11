import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import imageNull from "./image.png";
import backImage from "../assets/back.png";
import "../pages/MovieDetail.css";
import "../pages/TvPopup.css";     
import MovieList from "../components/MovieList";
import muteIcon from "../assets/mute.png";
import unmuteIcon from "../assets/unmute.png";

function TvDetail() {
  const { id } = useParams();
  const [tvData, setTvData] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [episodeList, setEpisodeList] = useState([]);
  const [showEpisodeList, setShowEpisodeList] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [finalURL, setFinalURL] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const trailerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTv() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=9354b7f55770ee27726d6e6b757de889`
        );
        const data = await res.json();
        setTvData(data);

        if (data?.seasons?.length > 0) {
          const firstSeason = data.seasons[0].season_number;
          setSelectedSeason(firstSeason);
          loadEpisodes(firstSeason);
        }

        loadTrailer();
      } catch (err) {
        console.error("TV DETAIL ERROR:", err);
      }
    }

    async function loadTrailer() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=9354b7f55770ee27726d6e6b757de889`
        );
        const data = await res.json();
        const trailer = data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        if (trailer) {
          setVideoUrl(`https://www.youtube.com/embed/${trailer.key}`);
          setVideoId(trailer.key);
        }
      } catch (err) {
        console.error("TRAILER ERROR:", err);
      }
    }

    loadTv();
  }, [id]);

  const loadEpisodes = async (seasonNum) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}?api_key=9354b7f55770ee27726d6e6b757de889`
      );
      const data = await res.json();
      setEpisodeList(data?.episodes ?? []);
    } catch (err) {
      console.error("EPISODE ERROR:", err);
    }
  };

  const handleSeasonChange = (e) => {
    const newSeason = e.target.value;
    setSelectedSeason(newSeason);
    loadEpisodes(newSeason);
  };

  const playEpisode = (season, ep) => {
    const url = `https://player.videasy.net/tv/${id}/${season}/${ep}?overlay=true`;
    setFinalURL(url);
    setShowEpisodeList(false);
    setShowPlayer(true);
  };

  if (!tvData) return <div className="loading">Loading...</div>;

  const backdrop = tvData.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${tvData.backdrop_path}`
    : imageNull;
  const poster = tvData.poster_path
    ? `https://image.tmdb.org/t/p/w500${tvData.poster_path}`
    : imageNull;

  return (
    <div className="detailcont">
      <div className="dgrad"></div>

      {/* HEADER */}
      <div className="firstcont">
        <button onClick={() => navigate(-1)} id="back">
          <img src={backImage} id="backimg" alt="Back" />
        </button>

        <img
          src={backdrop}
          alt="Backdrop"
          className="backdropimg"
          onError={(e) => (e.target.src = imageNull)}
        />

        <div className="topdetail">
          <img
            src={poster}
            alt="Poster"
            className="imgdt"
            onError={(e) => (e.target.src = imageNull)}
          />

          <div className="detailtext">
            <h2 id="dtitle">{tvData.name}</h2>

            <div className="dinfo">
              <div id="dratings">
                <p>{tvData.vote_average?.toFixed(1) || "N/A"}</p>
              </div>
              <div id="rdate">
                <p>
                  {tvData.first_air_date} • {tvData.number_of_seasons} Seasons
                </p>
              </div>
            </div>

            <p className="ovtext">{tvData.overview}</p>

            <button
              className="playbtn"
              onClick={() => setShowEpisodeList(true)}
            >
              ▶ Watch on uFlix
            </button>
          </div>
        </div>
      </div>

      {/* POPUP LIST EPISODE */}
      {showEpisodeList && (
        <div className="player-overlay" style={{ backdropFilter: "blur(4px)" }}>
          <div className="player-container tv-popup" style={{ maxWidth: "800px", padding: "20px", borderRadius: "12px" }}>
            <button
              className="close-player"
              onClick={() => setShowEpisodeList(false)}
              style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}
            >
              ✕
            </button>

            <div className="tv-popup-header" style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
              <img src={poster} className="tv-popup-poster" style={{ width: "120px", borderRadius: "8px" }} />
              <div>
                <h2 style={{ margin: 0 }}>{tvData.name}</h2>
                <p>{tvData.number_of_seasons} Seasons</p>
              </div>
            </div>

            <div className="tv-season-select" style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "10px", fontWeight: "bold" }}>Season:</label>
              <select
                value={selectedSeason}
                onChange={handleSeasonChange}
                style={{ padding: "5px 10px", borderRadius: "6px" }}
              >
                {tvData.seasons?.map((s) => (
                  <option key={s.id} value={s.season_number}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="tv-episode-list" style={{ maxHeight: "400px", overflowY: "auto" }}>
              {episodeList.map((ep) => (
                <div
                  key={ep.id}
                  className="tv-episode-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#1c1c1c",
                    padding: "10px 15px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  <div>
                    <strong>Episode {ep.episode_number}</strong> — {ep.name}
                  </div>

                  <button
                    className="playbtn"
                    onClick={() =>
                      playEpisode(selectedSeason, ep.episode_number)
                    }
                  >
                    ▶ Play
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TRAILER */}
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

      {/* POPUP PLAYER */}
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
              src={finalURL}
              allowFullScreen
              frameBorder="0"
              className="player-iframe"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TvDetail;
