import "../style/portfolio.css";
import React, { useEffect, useRef } from "react";

const Portfolio = () => {
  return (
    <div className="section-portfolio" id="portfolio">
      <div
        className="container-portfolio"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="vertical">
        <h1
          className="section-name-portfolio"
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal">
          Portfolio
        </h1>
        <div className="container-projects">
          <div className="project-widget project1">
            <h1 className="title-project">Confort Uno Mobili</h1>
            <p className="short-description">
              Interior design website developed.
            </p>
            <h4 className="technologies-used">react, js, css</h4>
          </div>

          <div className="project-widget project2">
            <h1 className="title-project">AFA Trasporti</h1>
            <p className="short-description">
              Presentation website for a transport company.
            </p>
            <h4 className="technologies-used">react, js, css</h4>
          </div>

          <div className="project-widget project3">
            <h1 className="title-project">Portfolio AlexStanciu</h1>
            <p className="short-description">
              Designed and developed a personal portfolio.
            </p>
            <h4 className="technologies-used">react, js, css</h4>
          </div>

          <div className="project-widget project4">
            <h1 className="title-project">Dr. Catalin Teodor</h1>
            <p className="short-description">
              Interesting project for a dentist website.
            </p>
            <h4 className="technologies-used">react, parallax, js, css</h4>
          </div>

          <div className="project-widget project5">
            <h1 className="title-project">upvisionMedia 1.0</h1>
            <p className="short-description">
              First version of upvisionMedia website.
            </p>
            <h4 className="technologies-used">react, js, css</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
