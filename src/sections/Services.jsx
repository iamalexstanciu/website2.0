import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  height: auto;
  width: 80vw;
  margin: 0 auto;
  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Rajdhani", sans-serif;
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const LeftSide = styled.div`
  width: 50%;
  font-family: "Rajdhani", sans-serif;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

const RightSide = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: 100vh;
    opacity: 0.9;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const Services = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        Services
      </Title>
      <LeftSide>
        Website Development: At our web development agency, we specialize in
        creating stunning and highly functional websites tailored to your unique
        needs. Our expert team of designers and developers work closely with you
        to bring your vision to life. We focus on user-friendly interfaces,
        intuitive navigation, and captivating aesthetics to ensure your website
        not only looks great but also delivers an exceptional user experience.
        <br />
        <br />
        SEO Optimization: We understand that having a beautiful website is just
        the first step. To ensure your online presence is impactful, we provide
        comprehensive SEO optimization services. Our SEO experts employ the
        latest strategies and techniques to improve your website's visibility on
        search engines. This includes keyword research, on-page and off-page
        optimization, content optimization, and more. With our SEO services,
        your website will not only be visually appealing but also rank higher in
        search engine results, driving more organic traffic and potential
        customers to your site.
        <br />
        <br />
        Mobile Responsiveness: In today's mobile-centric world, having a
        mobile-responsive website is crucial. Our agency ensures that your
        website is fully optimized for mobile devices, providing a seamless and
        visually pleasing experience on smartphones and tablets. This mobile
        responsiveness not only enhances user satisfaction but also improves
        your website's search engine rankings, as mobile-friendliness is a key
        factor in search algorithms.
      </LeftSide>
      <RightSide>
        <img
          src="https://images.unsplash.com/photo-1666698809123-44e998e93f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
          alt="second services"
        />
      </RightSide>
    </Section>
  );
};

export default Services;
