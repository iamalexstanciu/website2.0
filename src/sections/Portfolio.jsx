import "../style/portfolio.css";
import React from "react";

import Img1 from "../assets/images/project1.jpg";
import Img2 from "../assets/images/project1.1.jpg";
import Img3 from "../assets/images/project2.jpg";
import Img4 from "../assets/images/project2.1.jpg";
import Img5 from "../assets/images/project3.jpg";
import Img6 from "../assets/images/project3.1.jpg";
import Img7 from "../assets/images/project4.png";
import Img8 from "../assets/images/project4.1.png";

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <div className="container-portfolio">
        <h1
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal">
          Portfolio
        </h1>

        <div data-scroll data-scroll-speed="-4">
          <p>
            Welcome to our Portfolio Showcase, where we proudly present a
            curated selection of our finest web development projects. Each
            project is a testament to our team's creativity, technical
            expertise, and unwavering commitment to excellence.
            <br />
            <br />
            Explore a diverse range of visually stunning and functionally
            exceptional websites that we've crafted for clients across various
            industries. From sleek and modern designs to user-friendly
            e-commerce platforms, our portfolio embodies the essence of
            innovation and craftsmanship.
            <br />
            <br />
            These projects are not just websites; they are successful digital
            experiences that have helped our clients thrive online. Discover the
            possibilities with our web development agency through our showcased
            masterpieces.
          </p>
        </div>
        <div className="right-side">
          <img className="image-portfolio" src={Img1} title="AFA Trasporti" />
          <img className="image-portfolio" src={Img2} title="AFA Trasporti" />
          <img
            className="image-portfolio"
            src={Img3}
            title="Confort Uno Mobili"
          />
          <img
            className="image-portfolio"
            src={Img4}
            title="Confort Uno Mobili"
          />
          <img
            className="image-portfolio"
            src={Img5}
            title="Upvision Media 1.0"
          />
          <img
            className="image-portfolio"
            src={Img6}
            title="Upvision Media 1.0"
          />
          <img className="image-portfolio" src={Img7} title="Portfolio" />
          <img className="image-portfolio" src={Img8} title="Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
