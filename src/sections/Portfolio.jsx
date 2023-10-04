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
import Img6 from "../assets/images/project4.png";
import Img7 from "../assets/images/project4.1.png";

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
    margin: 0 auto;
    top: 25%;
  }

  @media (max-width: 48em) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Photos = ({ img, name }) => {
  return (
    <Item>
      <img style={{ width: "400", height: "600" }} src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
      let element = ref.current;
      

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section>
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        Portfolio
      </Title>

      <Container ref={ScrollingRef}>
        <Photos img={Img1} name="Denim" />
        <Photos img={Img2} name="Cool Dresses" />
        <Photos img={Img3} name="Jackets" />
        <Photos img={Img4} name="T-shirts" />
        <Photos img={Img5} name="T-shirts" />
        <Photos img={Img6} name="T-shirts" />
        <Photos img={Img7} name="T-shirts" />
      </Container>

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
    </Section>
  );
};

export default Portfolio;
