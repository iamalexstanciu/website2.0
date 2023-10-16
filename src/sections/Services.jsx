import React from "react";
import "../style/services.css";

const Services = () => {
  return (
    <div className="section-services" id="services">
      <div className="container-services">
        <div className="left-side-services">
          <h1
            className="title-services"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal">
            Services
          </h1>
          <div className="content-services">
            Website Development: At our web development agency, we specialize in
            creating stunning and highly functional websites tailored to your
            unique needs. Our expert team of designers and developers work
            closely with you to bring your vision to life. We focus on
            user-friendly interfaces, intuitive navigation, and captivating
            aesthetics to ensure your website not only looks great but also
            delivers an exceptional user experience.
            <br />
            <br />
            SEO Optimization: We understand that having a beautiful website is
            just the first step. To ensure your online presence is impactful, we
            provide comprehensive SEO optimization services. Our SEO experts
            employ the latest strategies and techniques to improve your
            website's visibility on search engines. This includes keyword
            research, on-page and off-page optimization, content optimization,
            and more. With our SEO services, your website will not only be
            visually appealing but also rank higher in search engine results,
            driving more organic traffic and potential customers to your site.
            <br />
            <br />
            Mobile Responsiveness: In today's mobile-centric world, having a
            mobile-responsive website is crucial. Our agency ensures that your
            website is fully optimized for mobile devices, providing a seamless
            and visually pleasing experience on smartphones and tablets. This
            mobile responsiveness not only enhances user satisfaction but also
            improves your website's search engine rankings, as
            mobile-friendliness is a key factor in search algorithms.
          </div>
        </div>
        <div className="right-side-services">
          <img
            src="https://images.unsplash.com/photo-1666698809123-44e998e93f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
            alt="second services"
            className="image-services"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
