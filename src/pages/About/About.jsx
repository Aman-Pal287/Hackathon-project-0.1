import img01 from "../About/img/img01.webp";
import img06 from "../Home/images/12.webp";
import img07 from "../Home/images/07.jpg";
import img08 from "../Home/images/08.jpg";
import img13 from "../Home/images/13.webp";
import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-page-top">
        <img src={img01} alt="" />
      </section>
      <section className="about-page-section-1">
        <p>
          KOMAL PANDY, a leading voice in India’s fashion and content creation
          space, is the creative force behind her self-made luxury fashion label
          for women. With years of experience as a digital creator and stylist,
          Komal has consistently used fashion as a medium of self-expression and
          empowerment. Her journey, marked by breaking stereotypes and
          challenging societal norms, laid the foundation for a brand that
          celebrates individuality and emotional authenticity. Alongside a
          talented creative team, Komal set out to build a label that resonates
          with the modern Indian woman, drawing inspiration from the diverse
          roles she plays in today’s world. The brand embraces a spectrum of
          female archetypes—bold, soft, fierce, nurturing, independent,
          creative, and intuitive—symbolizing not just fashion, but the
          multifaceted spirit of womanhood.
        </p>
      </section>
      <section className="about-page-section-2">
        <img src={img06} alt="" />
      </section>
      <section className="about-page-section-3">
        <p>
          Komal shares her philosophy behind the brand’s vision: “For me,
          fashion has always been more than just clothes—it's a powerful tool
          for self-awareness. The moment a woman begins to understand her
          emotions, her strengths, her insecurities—that’s where true
          transformation begins. I’ve personally experienced how embracing your
          authentic self can heal deep-rooted issues like body image struggles
          or societal pressure to look a certain way. Through my journey, I’ve
          realized that the fashion industry often overlooks the emotional and
          psychological side of style. That’s where our design language
          begins—with emotion, identity, and intention. The seven female
          archetypes allow us to connect deeply with our audience and create
          collections that speak to every facet of womanhood.”
        </p>

        <div className="about-page-section-3-div">
          <img className="image" src={img07} alt="" />
        </div>
      </section>

      <section className="about-page-section-3">
        <div className="about-page-section-3-div">
          <img className="image" src={img08} alt="" />
        </div>
        <p>
          Komal explains her approach to fashion and self-expression: “The first
          step toward true confidence is self-awareness. For me, fashion has
          always been a medium to explore and express that. When women begin to
          understand their emotions, body, and identity, something powerful
          happens—they start embracing themselves fully. I’ve personally faced
          body image issues and societal judgments, and I know how healing it is
          to dress not to impress, but to express. In this industry, we often
          overlook the emotional and psychological side of styling—but that’s
          exactly where the magic begins. With our work, I wanted to bring depth
          back into fashion, and the seven female archetypes became the perfect
          lens to do that. They help us design not just for appearance, but for
          the woman behind it all.”
        </p>
      </section>

      <section className="about-page-section-4">
        <img src={img13} alt="" />
      </section>
    </div>
  );
};

export default About;
