import "../style/portfolio.css";
import React, { useEffect, useRef } from "react";

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
    <div className="section-portfolio" id="portfolio">
      <div className="container-portfolio">
        <div className="left-side-portfolio">
          <h1
            className="section-name-portfolio"
            data-scroll
            data-scroll-speed="-1"
            data-scroll-direction="horizontal">
            Portfolio
          </h1>

          <div className="content-portfolio" data-scroll data-scroll-speed="-2">
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
              experiences that have helped our clients thrive online. Discover
              the possibilities with our web development agency through our
              showcased masterpieces.
            </p>
          </div>
        </div>
        <div class="external">
          <div class="horizontal-scroll-wrapper">
            <div class="img-wrapper slower">
              <a href="#0" target="_blank" rel="noopener">
                <img src={Img1} alt="" />
              </a>
            </div>

            <div class="img-wrapper faster">
              <a href="#0" target="_blank" rel="noopener">
                <img src={Img2} />
              </a>
            </div>

            <div class="img-wrapper slower vertical">
              <a href="#0" target="_blank" rel="noopener">
                <img src={Img3} alt="" />
              </a>
            </div>

            <div class="img-wrapper slower slower-down">
              <a href="#0" target="_blank" rel="noopener">
                <img src={Img4} alt="" />
              </a>
            </div>

            <div class="img-wrapper">
              <a
                href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/"
                target="_blank"
                rel="noopener">
                <img src={Img5} alt="" />
              </a>
            </div>

            <div class="img-wrapper slower">
              <a
                href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/"
                target="_blank"
                rel="noopener">
                <img src={Img6} alt="" />
              </a>
            </div>

            <div class="img-wrapper faster1">
              <a
                href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/"
                target="_blank"
                rel="noopener">
                <img src={Img7} alt="" />
              </a>
            </div>

            <div class="img-wrapper slower slower2">
              <a
                href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/"
                target="_blank"
                rel="noopener">
                <img src={Img8} alt="" />
              </a>
            </div>

            <div class="img-wrapper">
              <a
                href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/"
                target="_blank"
                rel="noopener">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="img-wrapper slower">
              <a
                href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/"
                target="_blank"
                rel="noopener">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="img-wrapper slower last">
              <a
                href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
                target="_blank"
                rel="noopener">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
