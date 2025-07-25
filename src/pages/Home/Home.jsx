import "./Home.scss";
import img01 from "./images/01.jpeg";

import img03 from "./images/03.jpg";
import img04 from "./images/04.jpg";
import img05 from "./images/05.jpg";
import img06 from "./images/06.jpg";
import img07 from "./images/07.jpg";
import img08 from "./images/08.jpg";
import img09 from "./images/09.webp";
import img10 from "./images/10.webp";
import heroVideo from "../../../public/hero_video/hero_video.mp4";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero-section">
        <video src={heroVideo} autoPlay muted loop></video>
      </section>

      <section className="home-section-2">
        <div className="right">
          <h1>Shop by Archetype</h1>
          <div className="section-2-right-images-div">
            <div className="section-2-right-image">
              <img src={img03} alt="" />
              <p>Aphrodite</p>
            </div>
            <div className="section-2-right-image">
              <img src={img04} alt="" />
              <p>Aphrodite</p>
            </div>
            <div className="section-2-right-image">
              <img src={img05} alt="" />
              <p>Aphrodite</p>
            </div>
            <div className="section-2-right-image">
              <img src={img06} alt="" />
              <p>Aphrodite</p>
            </div>
            <div className="section-2-right-image">
              <img src={img07} alt="" />
              <p>Aphrodite</p>
            </div>
          </div>
        </div>

        <div className="left">
          <img src={img01} alt="" />
        </div>
      </section>

      <section className="home-section-3">
        <div className="home-section-3-card">
          <img src={img08} alt="" />
          <h1>New Arrivals</h1>
          <p onClick={() => navigate("/products")}>Shop New Arrivals</p>
        </div>
        <div className="home-section-3-card">
          <img src={img09} alt="" />
          <h1>Ready to Wear</h1>
          <p onClick={() => navigate("/products")}>Shop Ready to Wear</p>
        </div>
        <div className="home-section-3-card">
          <img src={img10} alt="" />
          <h1>Shop Dresses</h1>
          <p onClick={() => navigate("/products")}>Shop Dresses</p>
        </div>
      </section>

      <section className="home-section-4">
        <form className="home-section-4-form">
          <h1>
            Sign up to keep up to date with <br /> KStyle Studio!
          </h1>
          <p>
            Dive into your unique style, sans pretense and without <br />{" "}
            conformity and experience NOUSHELLA.
          </p>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
