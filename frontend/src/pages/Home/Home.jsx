import "./Home.scss";
import img01 from "./images/01.jpeg";
import img02 from "./images/02.jpeg";
import img03 from "./images/03.jpg";
import img04 from "./images/04.jpg";
import img05 from "./images/05.jpg";
import img06 from "./images/06.jpg";
import img07 from "./images/07.jpg";
import img08 from "./images/08.jpg";
import img09 from "./images/09.webp";
import img10 from "./images/10.webp";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <img src={img02} alt="" />
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
          <p>Shop New Arrivals</p>
        </div>
        <div className="home-section-3-card">
          <img src={img09} alt="" />
          <h1>New Arrivals</h1>
          <p>Shop New Arrivals</p>
        </div>
        <div className="home-section-3-card">
          <img src={img10} alt="" />
          <h1>New Arrivals</h1>
          <p>Shop New Arrivals</p>
        </div>
      </section>

      <section className="home-section-4"></section>
    </div>
  );
};

export default Home;
