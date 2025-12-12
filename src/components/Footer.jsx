import "./Footer.css";
import XLogo from '../assets/XLogo.png';

function Footer() {
return ( <div className="footer"> <p className='cftitle' id='cft'>uFlix - Box Office Movies</p>


  <div className="follow-us">
    <span>Follow us on :</span>
    <a href="https://x.com/uflix_space" target="_blank" rel="noopener noreferrer" className="social-icon">
      <img src={XLogo} alt="X Logo" />
    </a>
    <a href="https://x.com/uflix_space" id="cfds" target="_blank" rel="noopener noreferrer">@uflix_space</a>
  </div>

  <p>English - US</p>
  <p className='cftitle' id="cfts">REFERENCE</p>
  <p id="cfds">The Movie Database (TMDB)</p>
  <p className="cftitle" id="cfts">LEGAL</p>
  <a href="https://www.themoviedb.org/privacy-policy" id="cfds" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
</div>


);
}

export default Footer;
