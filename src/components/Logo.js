import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoHeader from "../assets/images/logo.png";
import { motion } from "framer-motion";

const Container = styled.div`
  img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 10%;
    z-index: 5;
  }

  @media screen and (max-width: 950px) {
    img {
      width: 20%;
    }
  }
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <motion.path
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}>
          <img src={LogoHeader} alt="upvisionmedia" />
        </motion.path>
      </Link>
    </Container>
  );
};

export default Logo;
