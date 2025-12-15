import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies, getGenreData } from "../api.js";
import MoviePreview from "../components/MoviePreview";
import CastPreview from "../components/CastPreview";
import TvPreview from "../components/TvPreview";
import "./SearchResult.css";
import arrowImage from "../assets/back.png";
import AdBanner from "../components/AdBanner.jsx";
import AdRow from "../components/AdRow.jsx";

function SearchResult() {
  const { searchval } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [sortOption, setSortOption] = useState("popularity.desc");
  const [genreOption, setGenreOption] = useState("");

  useEffect(() => {
    fetchSearchResults(searchval, sortOption, genreOption);
  }, [searchval, sortOption, genreOption]);

  const sortSearchResults = (results, option) => {
    let sortedResults = [...results];

    if (option === "popularity.desc") {
      sortedResults.sort((a, b) => b.popularity - a.popularity);
    } else if (option === "popularity.asc") {
      sortedResults.sort((a, b) => a.popularity - b.popularity);
    } else if (option === "vote_average.desc") {
      sortedResults.sort((a, b) => b.vote_average - a.vote_average);
    } else if (option === "vote_average.asc") {
      sortedResults.sort((a, b) => a.vote_average - b.vote_average);
    }

    return sortedResults;
  };

  const fetchSearchResults = (searchKeyword, sortOption, genreOption) => {
    searchMovies(searchKeyword, sortOption).then((data) => {
      const filteredResults = filterResultsByGenre(data, genreOption);
      const sortedResults = sortSearchResults(filteredResults, sortOption);
      setSearchResults(sortedResults);
    });
  };

  const filterResultsByGenre = (results, genreOption) => {
    if (genreOption === "") {
      return results;
    } else {
      return results.filter((item) => {
        if (item.genre_ids) {
          return item.genre_ids.includes(parseInt(genreOption));
        } else {
          return false;
        }
      });
    }
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const handleGenreOptionChange = (option) => {
    setGenreOption(option);
  };

  return (
    <div className="flex-container">
      <div className="sort-buttons">
        <a>Popularity</a>
        <button
          className={`sort-button ${
            sortOption === "popularity.desc" && "active"
          }`}
          onClick={() => handleSortOptionChange("popularity.desc")}
          id="sort-buttons"
        >
          <img src={arrowImage} id="arrowimgdown"></img>
        </button>
        <button
          className={`sort-button ${
            sortOption === "popularity.asc" && "active"
          }`}
          onClick={() => handleSortOptionChange("popularity.asc")}
          id="sort-buttons"
        >
          <img src={arrowImage} id="arrowimgup"></img>
        </button>
        <a id="hr1">Rating</a>
        <button
          className={`sort-button ${
            sortOption === "vote_average.desc" && "active"
          }`}
          onClick={() => handleSortOptionChange("vote_average.desc")}
          id="sort-buttons"
        >
          <img src={arrowImage} id="arrowimgdown"></img>
        </button>
        <button
          className={`sort-button ${
            sortOption === "vote_average.asc" && "active"
          }`}
          onClick={() => handleSortOptionChange("vote_average.asc")}
          id="sort-buttons"
        >
          <img src={arrowImage} id="arrowimgup"></img>
        </button>
        <select
          className="genre-select"
          value={genreOption}
          onChange={(e) => handleGenreOptionChange(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10770">TV Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
      </div>
      <div id="csbarcont">
        {searchResults.map((item) => {
          if (item.media_type === "movie") {
            console.log("Movie:", item);
            return <MoviePreview key={item.id} item={item} />;
          // } else if (item.media_type === "person") {
          //   console.log("Person:", item);
          //   return <CastPreview key={item.id} cast={item} />;
          } else if (item.media_type === "tv") {
            console.log("TV Show:", item);
            return <TvPreview key={item.id} item={item} />;
          }

          return null;
        })}
      </div>
      <AdRow />
      <AdBanner />
    </div>
  );
}

export default SearchResult;
