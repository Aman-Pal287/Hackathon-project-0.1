import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-top">
          <div className="footer-top-company">
            <h1>Company</h1>
            <ul>
              <li>Our Story</li>
              <li>Editorial Journal</li>
              <li>Press</li>
              <li>Collaborations</li>
            </ul>
          </div>

          <div className="footer-top-help">
            <h1>Help</h1>
            <ul>
              <li>Contact Us</li>
              <li>Track Your Order</li>
              <li>FAQ's</li>
              <li>Delivery and Returns</li>
              <li>Size Guide</li>
            </ul>
          </div>

          <div className="footer-top-legal">
            <h1>Legal</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div className="footer-top-social">
            <h1>Social</h1>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </section>
    </>
  );
};

export default Footer;
