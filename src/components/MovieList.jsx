import React, { useRef, useEffect, useState } from "react";
import {
  getTrendingMovieData,
  getTopRatedMovieData,
  getNowPlayingMovieData,
} from "../api.js";
import MoviePreview from "../components/MoviePreview";
import "./MovieList.css";
import arrowImage from "../assets/back.png";

function MovieList() {
  const [topRatedMovieData, setTopRatedMovieData] = useState([]);
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState([]);
  const [trendingCurrentPage, setTrendingCurrentPage] = useState(1);
  const [nowPlayingCurrentPage, setNowPlayingCurrentPage] = useState(1);
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  useEffect(() => {
    getTrendingMovieData("movie").then((data) => setTrendingMovieList(data));
  }, []);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getTopRatedMovies = () => {
    getTopRatedMovieData(topRatedMovieData.length / 20 + 1)
      .then((data) => {
        setTopRatedMovieData((prevData) => [...prevData, ...data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getNowPlayingMovies = () => {
    getNowPlayingMovieData(nowPlayingCurrentPage)
      .then((data) => {
        setNowPlayingMovieData((prevData) => [...prevData, ...data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const trendingRef = useRef(null);
  const nowPlayingRef = useRef(null);
  const topRatedRef = useRef(null);
  const [hideTrendingButton, setHideTrendingButton] = useState(false);
  const [hideNowPlayingButton, setHideNowPlayingButton] = useState(false);
  const [hideTopRatedButton, setHideTopRatedButton] = useState(false);

  useEffect(() => {
    const handleScroll = (ref) => {
      ref.current.scrollLeft += scrollAmount;
    };

    const handleContainerScroll = () => {
      const trendingDiv = trendingRef.current;
      const nowPlayingDiv = nowPlayingRef.current;
      const topRatedDiv = topRatedRef.current;

      setHideTrendingButton(
        trendingDiv.scrollLeft + trendingDiv.clientWidth >=
          trendingDiv.scrollWidth - 50
      );

      setHideNowPlayingButton(
        nowPlayingDiv.scrollLeft + nowPlayingDiv.clientWidth >=
          nowPlayingDiv.scrollWidth - 50
      );

      setHideTopRatedButton(
        topRatedDiv.scrollLeft + topRatedDiv.clientWidth >=
          topRatedDiv.scrollWidth - 50
      );
    };

    const trendingDiv = trendingRef.current;
    const nowPlayingDiv = nowPlayingRef.current;
    const topRatedDiv = topRatedRef.current;

    trendingDiv.addEventListener("scroll", handleContainerScroll);
    nowPlayingDiv.addEventListener("scroll", handleContainerScroll);
    topRatedDiv.addEventListener("scroll", handleContainerScroll);

    return () => {
      trendingDiv.removeEventListener("scroll", handleContainerScroll);
      nowPlayingDiv.removeEventListener("scroll", handleContainerScroll);
      topRatedDiv.removeEventListener("scroll", handleContainerScroll);
    };
  }, []);

  const handleLoadMoreTrending = () => {
    const nextPage = trendingCurrentPage + 1;
    getTrendingMovieData("movie", nextPage)
      .then((data) => {
        setTrendingMovieList((prevData) => [...prevData, ...data]);
        setTrendingCurrentPage(nextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoadMoreNowPlaying = () => {
    const nextPage = nowPlayingCurrentPage + 1;
    getNowPlayingMovieData(nextPage)
      .then((data) => {
        setNowPlayingMovieData((prevData) => [...prevData, ...data]);
        setNowPlayingCurrentPage(nextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleScroll = (ref) => {
    ref.current.scrollLeft += window.innerWidth;
  };

  useEffect(() => {
    setScrollAmount(window.innerWidth);
  }, []);

  return (
    <div>
      <h2 id="htitle">Trending Movies</h2>
      <div ref={trendingRef} className="trending-container" id="barcont">
        {trendingMovieList.map((item) => (
          <MoviePreview key={item.id} item={item} />
        ))}
        <button onClick={handleLoadMoreTrending} className="mmore">
          <img src={arrowImage} id="arrowimg" />
        </button>
        {!hideTrendingButton && (
          <button
            onClick={() => handleScroll(trendingRef)}
            className="scroll-button"
          >
            <img src={arrowImage} id="arrowimg" />
          </button>
        )}
      </div>
      <h2 id="htitle">Now Showing</h2>
      <div ref={nowPlayingRef} className="nowplaying-container" id="barcont">
        {nowPlayingMovieData.map((item) => (
          <MoviePreview key={item.id} item={item} />
        ))}
        <button onClick={handleLoadMoreNowPlaying} className="mmore">
          <img src={arrowImage} id="arrowimg" />
        </button>
        {!hideNowPlayingButton && (
          <button
            onClick={() => handleScroll(nowPlayingRef)}
            className="scroll-button"
          >
            <img src={arrowImage} id="arrowimg" />
          </button>
        )}
      </div>
      <h2 id="htitle">Top Rated</h2>
      <div ref={topRatedRef} className="toprated-container" id="barcont">
        {topRatedMovieData.map((item) => (
          <MoviePreview key={item.id} item={item} />
        ))}
        <button onClick={getTopRatedMovies} className="mmore">
          <img src={arrowImage} id="arrowimg" />
        </button>
        {!hideTopRatedButton && (
          <button
            onClick={() => handleScroll(topRatedRef)}
            className="scroll-button"
          >
            <img src={arrowImage} id="arrowimg" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieList;
