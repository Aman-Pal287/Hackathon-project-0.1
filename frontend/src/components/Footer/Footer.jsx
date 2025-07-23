import "./Footer.scss";
import logo from "../../../public/logo/footer_logo_FINAL.webp"; // Assuming you have a logo image

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-top">
          <div className="footer-top-company footer-top-item">
            <h1>Company</h1>
            <ul>
              <p>Our Story</p>
              <p>Editorial Journal</p>
              <p>Press</p>
              <p>Collaborations</p>
            </ul>
          </div>

          <div className="footer-top-help footer-top-item">
            <h1>Help</h1>
            <ul>
              <p>Contact Us</p>
              <p>Track Your Order</p>
              <p>FAQ's</p>
              <p>Depvery and Returns</p>
              <p>Size Guide</p>
            </ul>
          </div>

          <div className="footer-top-legal footer-top-item">
            <h1>Legal</h1>
            <ul>
              <p>Privacy Popcy</p>
              <p>Terms and Conditions</p>
            </ul>
          </div>

          <div className="footer-top-social footer-top-item">
            <h1>Social</h1>
            <ul>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Youtube</p>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <img src={logo} alt="" />
          <h1>Copyright NOUSHELLA</h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
