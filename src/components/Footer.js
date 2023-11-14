import React from "react";
import "../style/footer.css";
import Linkedin from "../assets/images/linkedin.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <section className="footer-container">
      <div className="text-footer">
        <div className="text-up">
          <h3>Web Solutions, Tailored for You</h3>
          <p>
            We're dedicated to crafting exceptional web experiences. Our team of
            experts brings innovation and expertise to every project, turning
            your vision into reality. Let's collaborate to build the digital
            future together.
          </p>
        </div>
        <div className="business-info">
          <h3>upvisionMedia S.R.L</h3>
          <p>Intrarea Gheorghe Simionescu, Nr. 19, Ap. B26</p>
          <p>Bucuresti, Sector 1</p>
          <h5 className="registered">Registered Trademark upvisionMedia</h5>
        </div>
      </div>
      <div className="buttons-redirect">
        <p
          onClick={() => handleScroll("#home")}
          className="buttons-redirect-btn">
          Home
        </p>
        <p
          onClick={() => handleScroll("#portfolio")}
          className="buttons-redirect-btn">
          Portfolio
        </p>
        <p
          onClick={() => handleScroll("#services")}
          className="buttons-redirect-btn">
          Services
        </p>
        <p
          onClick={() => handleScroll("#contact")}
          className="buttons-redirect-btn">
          Get in touch
        </p>
      </div>{" "}
      <div className="socials">
        <ul class="wrapper">
          <li class="icon facebook">
            <a href="https://www.facebook.com/profile.php?id=100087936925363">
              <img className="social-image" src={Facebook} alt="social media" />
              <span class="tooltip">Facebook</span>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </a>
          </li>
          <li class="icon linkedin">
            <a href="https://www.linkedin.com/company/upvisionmedia/about/?viewAsMember=true">
              <img className="social-image" src={Linkedin} alt="social media" />
              <span class="tooltip">LinkedIn</span>
              <span>
                <i class="fab fa-linkedin"></i>
              </span>
            </a>
          </li>
          <li class="icon instagram">
            {" "}
            <a href="https://www.instagram.com/upvisionmediagency/?hl=en">
              <img
                className="social-image"
                src={Instagram}
                alt="social media"
              />
              <span class="tooltip">Instagram</span>
              <span>
                <i class="fab fa-instagram"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-footer">upvisionMedia ®</div>
    </section>
  );
};

export default Footer;
