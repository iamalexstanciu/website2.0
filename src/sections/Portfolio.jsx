import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import Img1 from "../assets/images/project1.jpg";
import Img2 from "../assets/images/project1.1.jpg";
import Img3 from "../assets/images/project2.jpg";
import Img4 from "../assets/images/project2.1.jpg";
import Img5 from "../assets/images/project3.jpg";
import Img6 from "../assets/images/project3.1.jpg";
import Img7 from "../assets/images/project4.png";
import Img8 from "../assets/images/project4.1.png";
import _ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 5rem;
  left: 5rem;
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
  background-color: #363636;
  color: #fff;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 11;

  p {
    position: relative;
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    margin: 0 auto;
    top: 25%;
  }

  @media (max-width: 48em) {
    display: none;
  }
`;

const RightSide = styled.div`
  position: absolute;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Portfolio = () => {
  gsap.registerPlugin(_ScrollTrigger);

  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;
    let pinWrapWidth = scrollingElement.offsetWidth;

    let tl = gsap.timeline();
    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      // ScrollerTrigger.kill(); throws me an error
    };
  }, []);

  return (
    <Section ref={ref} id="portfolio">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        Portfolio
      </Title>

      <Text data-scroll data-scroll-speed="-4">
        <p>
          Welcome to our Portfolio Showcase, where we proudly present a curated
          selection of our finest web development projects. Each project is a
          testament to our team's creativity, technical expertise, and
          unwavering commitment to excellence.
          <br />
          <br />
          Explore a diverse range of visually stunning and functionally
          exceptional websites that we've crafted for clients across various
          industries. From sleek and modern designs to user-friendly e-commerce
          platforms, our portfolio embodies the essence of innovation and
          craftsmanship.
          <br />
          <br />
          These projects are not just websites; they are successful digital
          experiences that have helped our clients thrive online. Discover the
          possibilities with our web development agency through our showcased
          masterpieces.
        </p>
      </Text>

      <RightSide ref={Horizontalref}>
        <Product img={Img1} title="AFA Trasporti" />
        <Product img={Img2} title="AFA Trasporti" />
        <Product img={Img3} title="Confort Uno Mobili" />
        <Product img={Img4} title="Confort Uno Mobili" />
        <Product img={Img5} title="Upvision Media 1.0" />
        <Product img={Img6} title="Upvision Media 1.0" />
        <Product img={Img7} title="Portfolio" />
        <Product img={Img8} title="Portfolio" />
      </RightSide>
    </Section>
  );
};

export default Portfolio;
