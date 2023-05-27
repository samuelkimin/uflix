import pDavid from "../assets/pdavid.jpeg";
import pDidi from "../assets/pdidi.jpeg";
import pNasbi from "../assets/pnasbi.jpeg";
import pKimin from "../assets/pkimin.jpeg";
import reactLogo from "../assets/logoreact.png";
import tmdbLogo from "../assets/logotmdb.svg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="ch1" id="ah1">
        {" "}
        About uFlix
      </h1>
      <hr id="aline1" />
      <br />
      <h2 className="ah2">Developers</h2>
      <div id="peoplesec">
        <div class="row" id="people">
          <div class="col" id="people1">
            <div id="conp">
              <img id="imgp" src={pKimin} />
              <div class="pname">Samuel Kimin</div>
              <div class="desc">
                Halo nama saya Samuel Kimin, biasa saya di panggil Kimin. Saya
                sekarang adalah mahasiswa semester 2 di Universitas Multimedia
                Nusantara dan memilih jurusan Informatika. Saya sebagai pembuat
                html, slideshow, dan css di Website ini.
              </div>
            </div>
          </div>
          <div class="col" id="people1">
            <div id="conp">
              <img id="imgp" src={pNasbi} />
              <div class="pname">Nathaniel Ezra Anasbi</div>
              <div class="desc">
                Halo nama saya Nathaniel Ezra Anasbi, biasa saya di panggil
                Nasbi. Saya sekarang adalah mahasiswa semester 2 di Universitas
                Multimedia Nusantara dan memilih jurusan Informatika. Saya
                sebagai pembuat Teknis React JS di Website ini.
              </div>
            </div>
          </div>
          <div class="col" id="people1">
            <div id="conp">
              <img id="imgp" src={pDidi} />
              <div class="pname">Riyandhi Adrian Darmawan</div>
              <div class="desc">
                Halo nama saya Riyandhi Adrian Darmawan, biasa saya di panggil
                Didi. Saya sekarang adalah mahasiswa semester 2 di Universitas
                Multimedia Nusantara dan memilih jurusan Informatika. Saya
                sebagai pembuat PowerPoint & Banner di Website ini.
              </div>
            </div>
          </div>
          <div class="col" id="people1">
            <div id="conp">
              <img id="imgp" src={pDavid} />
              <div class="pname">David Immanuel Resner</div>
              <div class="desc">
                Halo nama saya David Immanuel Resner, biasa saya di panggil
                David. Saya sekarang adalah mahasiswa semester 2 di Universitas
                Multimedia Nusantara dan memilih jurusan Informatika. Saya
                sebagai pembuat Logo & Banner di Website ini.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className="ah2">References</h2>
      <div className="arefcon">
      <div className="aref">
        This Website is Made with API from :
        <div className='source'>
        <img src={tmdbLogo} className="sourcelogo" />
        {/* The Movie Database (TMDB) */}
        </div>
        <br />
        This Website is Made with JS Library from :
        <div className='source'>
        <img src={reactLogo} className="sourcelogo2" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default About;
