import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 20%;
  background-color: aquamarine;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const RightSide = styled.div``;

const Portfolio = () => {
  return (
    <Section>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        Portfolio
      </Title>

      <Text data-scroll data-scroll-speed="-4">
        Text
      </Text>
      <RightSide>Carousel</RightSide>
    </Section>
  );
};

export default Portfolio;
