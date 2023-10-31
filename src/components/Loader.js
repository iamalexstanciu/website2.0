import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s opacity;
  background-color: black;
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const Text = styled(motion.span)`
  font-size: 100px;
  color: "#fc4308";
  padding-top: 0.5rem;
  text-shadow: 2px 2px gray;

  @media (max-width: 48em) {
    font-size: 35px;
  }
`;

const SubText = styled.div`
  font-size: 30px;
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: 35px;
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0.5, opacity: 1 }}
      animate={{
        opacity: 0.5, // This will smoothly fade out the component
      }}
      exit={{
        opacity: 0, // This ensures the component remains hidden when it exits
      }}
      transition={{ duration: 7 }}>
      <Text variants={textVariants} initial="hidden" animate="visible">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("upvisionMedia")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(3000)
              .deleteAll()
              .callFunction(() => {
                console.log("come to discover our world");
              })
              .start();
          }}
        />
      </Text>
      <SubText
        style={{ color: "#fc4308" }}
        variants={textVariants}
        initial="hidden"
        animate="visible">
        come to explore our world
      </SubText>
    </Container>
  );
};

export default Loader;
