import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faDownload, faComputerMouse} from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <div className="first_page">
      <header>
        {/* first page */}
        <nav className="sticky-nav">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <ul>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#countdown">Countdown</a>
            </li>
            <li>
              <a href="#notes">Notes</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="toggleswitch">
            <i className="fa-solid fa-moon" />
            <button className="toggle" onclick="toggleMode()">
              <i className="fa-solid fa-toggle-on toggleon" id="toggle" />
            </button>
            <i className="fa-solid fa-sun" />
          </div>
          <div id="menu">
            <i className="fa-solid fa-bars" />
          </div>
          <button id="button" className="btn1">
            <FontAwesomeIcon  icon={faPhone} className="fa-solid fa-phone-volume call" />
            Call Us
          </button>
        </nav>
      </header>
      <section id="intro" class="section1">
        <p>
          <strong>
            <i>IMOMOTIMI FOUNDATION PRESENTS</i>
          </strong>
        </p>
        <h3>Imomotimi Ijaw</h3>
        <h3>Dance Contest 2024</h3>
        <button class="btn2">
          Download Entry Form<FontAwesomeIcon icon={faDownload} className="fa-solid fa-download download" />
        </button>
        <p>
          All duly filled out form the entry fees should be brought along to the
          audition.
        </p>
      </section>
      <div class="mouse">
        <FontAwesomeIcon icon={faComputerMouse} class="fa-solid fa-computer-mouse" />
      </div>
      <Image
        className="firstimg"
        src="/shape-top-white-80.png"
        alt=""
        width={50}
        height={50}
      />
    </div>
  );
};

export default Home;
