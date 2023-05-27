import React from "react";
import { Link } from "react-router-dom";
import "./Genre.css";
import actionImg from "../assets/genre/action.jpg";
import advImg from "../assets/genre/adventure.jpg";
import animationImg from "../assets/genre/animation.jpg";
import comedyImg from "../assets/genre/comedy.jpg";
import crimeImg from "../assets/genre/crime.jpg";
import documentaryImg from "../assets/genre/documentary.jpg";
import dramaImg from "../assets/genre/drama.jpg";
import familyImg from "../assets/genre/family.jpg";
import fantasyImg from "../assets/genre/fantasy.jpeg";
import historyImg from "../assets/genre/history.jpg";
import horrorImg from "../assets/genre/horror.jpg";
import musicImg from "../assets/genre/music.jpg";
import mysteryImg from "../assets/genre/mystery.jpg";
import romanceImg from "../assets/genre/romance.jpg";
import scifiImg from "../assets/genre/scifi.jpg";
import thrillerImg from "../assets/genre/thriller.jpg";
import tvmImg from "../assets/genre/tvmovie.jpg";
import warImg from "../assets/genre/war.jpg";
import westernImg from "../assets/genre/western.jpg";

function Genre() {
  return (
    <div className="genrecontainer">
      <div className="gtitle">Genre</div>
      <Link to="/selectedgenre/28">
        <div className="genrebox">
          <img src={actionImg} alt="Action" className="gbimg" />
          <span className="genretext">Action</span>
        </div>
      </Link>
      <Link to="/selectedgenre/12">
        <div className="genrebox">
          <img src={advImg} alt="Adventure" className="gbimg" />
          <span className="genretext">Adventure</span>
        </div>
      </Link>
      <Link to="/selectedgenre/16">
        <div className="genrebox">
          <img src={animationImg} alt="Animation" className="gbimg" />
          <span className="genretext">Animation</span>
        </div>
      </Link>
      <Link to="/selectedgenre/35">
        <div className="genrebox">
          <img src={comedyImg} alt="Comedy" className="gbimg" />
          <span className="genretext">Comedy</span>
        </div>
      </Link>
      <Link to="/selectedgenre/80">
        <div className="genrebox">
          <img src={crimeImg} alt="Crime" className="gbimg" />
          <span className="genretext">Crime</span>
        </div>
      </Link>
      <Link to="/selectedgenre/99">
        <div className="genrebox">
          <img src={documentaryImg} alt="Documentary" className="gbimg" />
          <span className="genretext">Documentary</span>
        </div>
      </Link>
      <Link to="/selectedgenre/18">
        <div className="genrebox">
          <img src={dramaImg} alt="Drama" className="gbimg" />
          <span className="genretext">Drama</span>
        </div>
      </Link>
      <Link to="/selectedgenre/10751">
        <div className="genrebox">
          <img src={familyImg} alt="Family" className="gbimg" />
          <span className="genretext">Family</span>
        </div>
      </Link>
      <Link to="/selectedgenre/14">
        <div className="genrebox">
          <img src={fantasyImg} alt="Fantasy" className="gbimg" />
          <span className="genretext">Fantasy</span>
        </div>
      </Link>
      <Link to="/selectedgenre/36">
        <div className="genrebox">
          <img src={historyImg} alt="History" className="gbimg" />
          <span className="genretext">History</span>
        </div>
      </Link>
      <Link to="/selectedgenre/27">
        <div className="genrebox">
          <img src={horrorImg} alt="Horror" className="gbimg" />
          <span className="genretext">Horror</span>
        </div>
      </Link>
      <Link to="/selectedgenre/10402">
        <div className="genrebox">
          <img src={musicImg} alt="Music" className="gbimg" />
          <span className="genretext">Music</span>
        </div>
      </Link>
      <Link to="/selectedgenre/9648">
        <div className="genrebox">
          <img src={mysteryImg} alt="Mystery" className="gbimg" />
          <span className="genretext">Mystery</span>
        </div>
      </Link>
      <Link to="/selectedgenre/10749">
        <div className="genrebox">
          <img src={romanceImg} alt="Romance" className="gbimg" />
          <span className="genretext">Romance</span>
        </div>
      </Link>
      <Link to="/selectedgenre/878">
        <div className="genrebox">
          <img src={scifiImg} alt="Science Fiction" className="gbimg" />
          <span className="genretext">Science Fiction</span>
        </div>
      </Link>
      <Link to="/selectedgenre/10770">
        <div className="genrebox">
          <img src={tvmImg} alt="TV Movie" className="gbimg" />
          <span className="genretext">TV Movie</span>
        </div>
      </Link>
      <Link to="/selectedgenre/53">
        <div className="genrebox">
          <img src={thrillerImg} alt="Thriller" className="gbimg" />
          <span className="genretext">Thriller</span>
        </div>
      </Link>
      <Link to="/selectedgenre/10752">
        <div className="genrebox">
          <img src={warImg} alt="War" className="gbimg" />
          <span className="genretext">War</span>
        </div>
      </Link>
      <Link to="/selectedgenre/37">
        <div className="genrebox">
          <img src={westernImg} alt="Western" className="gbimg" />
          <span className="genretext">Western</span>
        </div>
      </Link>
    </div>
  );
}

export default Genre;
