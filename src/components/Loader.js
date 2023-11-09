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

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const SubText = styled.div`
  font-size: 30px;
  padding-top: 0.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Loader = () => {
  return (
    <Container>
      <h1>
        <Text variants={textVariants} initial="hidden" animate="visible">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("upvisionMedia")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .callFunction(() => {
                  console.log("come to discover our world");
                })
                .start();
            }}
          />
        </Text>
      </h1>
      <h2>
        <SubText
          style={{ color: "#fc4308" }}
          variants={textVariants}
          initial="hidden"
          animate="visible">
          come to explore our world
        </SubText>
      </h2>
    </Container>
  );
};

export default Loader;
