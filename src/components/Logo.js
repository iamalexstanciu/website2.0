import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoHeader from "../assets/images/logo.png";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 50%;
  z-index: 5;
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg xmlns="" />
      </Link>
    </Container>
  );
};

export default Logo;
