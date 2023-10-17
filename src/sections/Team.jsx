import React from "react";
import "../style/team.css";

function Team() {
  return (
    <div className="section-team" id="team">
      <div
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="vertical"
        className="container-team">
        <div className="section-name-team">Team</div>
        <div className="pictures-container">
          <div className="picture-1"></div>
          <div className="picture-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
