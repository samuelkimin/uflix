import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import searchicon from "./search-icon.png";
import { useNavigate } from "react-router-dom";
import logoWhite from "../assets/logowhite.png";

const Menu = (props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearchMovies = async () => {
    await props.onSearch(searchKeyword);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigateToSearchPage();
    }
  };

  const navigateToSearchPage = () => {
    navigate(`/search/${searchKeyword}`);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="nav-items">
          <div className="logo">
            <NavLink to="/" className="navlink">
              <img id="navlogo" src={logoWhite} alt="logo"></img>
              <h1>Flix</h1>
            </NavLink>
          </div>
          <div className="navlist">
            <NavLink to="/" className="nlink">
              Home
            </NavLink>
            <NavLink to="/genre" className="nlink">
              Genre
            </NavLink>
            <NavLink to="/cast" className="nlink">
              Cast
            </NavLink>
            <NavLink to="/comingsoon" className="nlink">
              Coming Soon
            </NavLink>
            <NavLink to="/about" className="nlink">
              About
            </NavLink>
          </div>
          <div className="searchbar">
            <div>
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search movies..."
                className="searchinput"
              />
              <button onClick={navigateToSearchPage} className="searchbutton">
                <img src={searchicon} alt="" id="sicon" />
              </button>
            </div>
          </div>
          <div className="menu">
            <input
              type="checkbox"
              class="openSidebarMenu"
              id="openSidebarMenu"
            ></input>
            <label for="openSidebarMenu" class="sidebarIconToggle">
              <div class="spinner diagonal part-1"></div>
              <div class="spinner horizontal"></div>
              <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
              <ul class="sidebarMenuInner">
                {/* <li className="bar">
                  <div className="searchbarr">
                    <input
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Search movies..."
                      className="searchinput"
                    />
                    <button
                      onClick={navigateToSearchPage}
                      className="searchbutton"
                    >
                      <img src={searchicon} alt="" id="sicon" />
                    </button>
                  </div>
                </li> */}
                <li>
                  <NavLink to="/" className="nlinks">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/genre" className="nlinks">
                    Genre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cast" className="nlinks">
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/comingsoon" className="nlinks">
                    Coming Soon
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nlinks">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
