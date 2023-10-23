import "../style/portfolio.css";
import React from "react";

const Portfolio = () => {
  return (
    <section className="section-portfolio" id="portfolio">
      <div
        className="container-portfolio"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="vertical">
        <h1
          className="section-name-portfolio"
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal">
          Portfolio
        </h1>
        <div className="container-projects">
          <div className="project-widget project1">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                01
              </span>{" "}
              Confort Uno Mobili
            </h1>
            <p className="short-description">
              Interior design website developed.
            </p>
            <a href="https://www.confortunomobili.com" className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project2">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                02
              </span>{" "}
              AFA Trasporti
            </h1>
            <p className="short-description">
              Presentation website for a transport company.
            </p>
            <a href="#0" className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project3">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                03
              </span>{" "}
              Portfolio AlexStanciu
            </h1>
            <p className="short-description">
              Designed and developed a personal portfolio.
            </p>
            <a href="https://www.alexstanciudev.com" className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project4">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                04
              </span>{" "}
              Dr. Catalin Teodor
            </h1>
            <p className="short-description">
              Interesting project for a dentist website.
            </p>
            <a href="#0" className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project5">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                05
              </span>{" "}
              upvisionMedia 1.0
            </h1>
            <p className="short-description">
              First version of upvisionMedia website.
            </p>
            <a href="#0" className="link-website">
              visit website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
