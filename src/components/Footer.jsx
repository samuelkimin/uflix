import "./Footer.css";

function About() {
  return (
    <div className="footer">
      <p classname='cftitle' id='cft'>uFlix - Box Office Movies</p>
      <p>English - US</p>
      <p classname='cftitle' id="cfts">REFERENCE</p>
      <p id="cfds">The Movie Database (TMDB)</p>
      <p className="cftitle" id="cfts">LEGAL</p>
      <a href="https://www.themoviedb.org/privacy-policy" id="cfds" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
    </div>
  );
}

export default About;
