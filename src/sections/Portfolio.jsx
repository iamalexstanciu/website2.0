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
              ConfortUnoMobili.com
            </h1>
            <p className="short-description">
              Interior design website developed.
            </p>
            <a
              href="https://www.confortunomobili.com"
              target="blank"
              className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project2">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                02
              </span>{" "}
              LuigiCollivasone.it
            </h1>
            <p className="short-description">
              Presentation website for an italian psychotherapist and
              psychologist.
            </p>
            <a
              href="https://www.luigicollivasone.it"
              target="blank"
              className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project3">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                03
              </span>{" "}
              AlexStanciuDev.com
            </h1>
            <p className="short-description">
              Designed and developed a personal portfolio.
            </p>
            <a
              href="https://www.alexstanciudev.com"
              target="blank"
              className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project4">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                04
              </span>{" "}
              CatalinTeodor.ro
            </h1>
            <p className="short-description">
              Interesting project for a dentist website.
            </p>
            <a
              href="https://catalinteodor.ro/"
              target="blank"
              className="link-website">
              visit website
            </a>
          </div>

          <div className="project-widget project5">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                05
              </span>{" "}
              Proiect3D.ro
            </h1>
            <p className="short-description">
              Design and 3d projects website for a customer.
            </p>
            <a
              href="https://proiect3d.ro/"
              target="blank"
              className="link-website">
              visit website
            </a>
          </div>
          <div className="project-widget project6">
            <h1 className="title-project">
              <span
                style={{ color: "gray", fontWeight: 400, marginRight: "5px" }}>
                06
              </span>{" "}
              CardForYou.it
            </h1>
            <p className="short-description">Our client from Italy, Sanremo.</p>
            <a
              href="https://www.cardforyou.it/"
              target="blank"
              className="link-website">
              visit website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
