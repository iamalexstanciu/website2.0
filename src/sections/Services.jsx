import React from "react";
import "../style/services.css";

const Services = () => {
  return (
    <div className="section-services" id="services">
      <div
        className="container-services"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="vertical">
        <h1
          className="title-services"
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal">
          Services
        </h1>

        <div className="content-services">
          <div className="card-services first-card-services">
            <p className="number-card-service">01</p>
            <h3 className="title-card-service">Responsive Design</h3>
            <p className="description-card-service">
              Responsive design is crucial for websites as it ensures optimal
              user experience on various devices, improves SEO, and boosts user
              engagement, vital for online success in today's multi-platform
              digital landscape.
            </p>
          </div>
          <div className="card-services second-card-services">
            <p className="number-card-service">02</p>
            <h3 className="title-card-service">UI/UX Design</h3>
            <p className="description-card-service">
              UI/UX graphic design enhances website aesthetics and usability,
              focusing on intuitive layouts, appealing visuals, and seamless
              interactions to create an engaging and user-friendly online
              experience.
            </p>
          </div>
          <div className="card-services third-card-services"></div>
          <div className="card-services fourth-card-services"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
