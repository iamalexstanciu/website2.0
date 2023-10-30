import React from "react";
import "../style/team.css";

function Team() {
  return (
    <section className="section-team" id="team">
      <div className="container-team">
        <div
          className="section-name-team"
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="vertical">
          Team
        </div>
        <div className="pictures-container">
          <div
            className="picture-1"
            data-scroll
            data-scroll-speed="3"
            data-scroll-direction="horizontal">
            <div className="card-title">
              <div className="description-role">
                <h3>CEO</h3>
                <h4>Alexandru Stanciu</h4>
              </div>
            </div>
          </div>
          <div
            className="picture-2"
            data-scroll
            data-scroll-speed="3"
            data-scroll-direction="horizontal">
            <div className="card-title">
              <div className="description-role">
                <h3>CEO</h3>
                <h4>Razvan Tache</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
