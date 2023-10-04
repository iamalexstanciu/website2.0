import React from "react";
import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Rajdhani", sans-serif;
  font-weight: 300;

  position: relative;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Portfolio = () => {
  return (
    <Section>
      <Title data-scroll data-scroll-speed="-1">
        Portfolio
      </Title>
    </Section>
  );
};

export default Portfolio;
