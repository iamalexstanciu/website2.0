import React, { useState } from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Location from "../components/Location";
import ButtonStartAProject from "../components/ButtonStartAProject";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section id="home">
      <CoverVideo />
      <Location />
      <Logo />
      <Navbar />
      <ButtonStartAProject />
    </Section>
  );
};

export default Home;
