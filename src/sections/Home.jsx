import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Location from "../components/Location";
import ButtonStartAProject from "../components/ButtonStartAProject";

const Section = styled.section`
  position: relative;
  height: 95vh;
  border-radius: 30px;
  top: 0.5rem;
  left: 2.5%;
  overflow: hidden;
  width: 95vw;
  border: 2px solid #fc4308;
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
