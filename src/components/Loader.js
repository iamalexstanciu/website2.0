import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

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

  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0.5, opacity: 1 }}
      exit={{ y: "100%", opacity: 0.2 }}
      transition={{ duration: 3 }}>
      <Text variants={textVariants} initial="hidden" animate="visible">
        upvisionMedia
      </Text>
    </Container>
  );
};

export default Loader;
