import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Cast from "../pages/Cast";
import Genre from "../pages/Genre";
import ComingSoon from "../pages/ComingSoon";
import MovieDetail from "../pages/MovieDetail";
import TvDetail from "../pages/TvDetail";
import CastDetail from "../pages/CastDetail";
import SearchResult from "../pages/SearchResult";
import { searchMovies } from "../api.js";
import SelectedGenre from "../pages/SelectedGenre";
import About from "../pages/About";
import Footer from "./Footer"
import "./transitions.css"; // Import your transition styles

function App() {
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();

  async function handleSearchMovies(searchKeyword) {
    const data = await searchMovies(searchKeyword);
    setMovieData(data);
  }

  return (
    <div>
      <Navbar onSearch={handleSearchMovies} />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page-transition"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/cast" element={<Cast />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/about" element={<About />} />
            <Route path="/moviedetail/:id" element={<MovieDetail />} />
            <Route path="/tvdetail/:id" element={<TvDetail />} />
            <Route path="/castdetail/:id" element={<CastDetail />} />
            <Route
              path="/search/:searchval"
              element={<SearchResult movieData={movieData} />}
            />
            <Route path="/selectedgenre/:genreId" element={<SelectedGenre />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
