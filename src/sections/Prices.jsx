import React from "react";
import "../style/prices.css";

function Prices() {

  return (
    <section className="section-prices" id="prices">
      <div className="container-prices">
        <div className="detailed-price">
          <div className="left-side-price">
            <div className="description-price">
              <h2> This is the starting price of the project which includes</h2>
              <ul>
                <li>
                  <span>Brainstorm & moodboard</span>
                </li>
                <li>
                  <span>Website structure in React</span>
                </li>
                <li>
                  <span>Responsive design</span>
                </li>
                <li>
                  <span>SEO on building websites</span>
                </li>
                <li>
                  <span>Creation of customized logo </span>
                </li>
                <li>
                  <span>Ad hoc graphic design</span>
                </li>
                <li>
                  <span>
                    2 hours of free tickets after going online to solve problems{" "}
                  </span>
                </li>
                <li>
                  <span>3 revisions</span>
                </li>
                <li>
                  <span>Creation of customized logo </span>
                </li>
                <li>
                  <span>
                    Retouching photographs sent to be published (or taking
                    photographs on our part if the customer is nearby){" "}
                  </span>
                </li>
              </ul>
            </div>
            {/* <a className="btn-price" href="mailto:info@upvisionmedia.com">
              Start a Project
            </a> */}
          </div>

          <h2 className="title-price">project start</h2>
        </div>
        <p
          className="price-name"
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical">
          €550
        </p>
      </div>
    </section>
  );
}

export default Prices;
