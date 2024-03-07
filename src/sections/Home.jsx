import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
// import Location from "../components/Location";
import ButtonStartAProject from "../components/ButtonStartAProject";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Section style={{ border: "none" }} id="home">
      <CoverVideo />
      {/* <Location /> */}
      <Logo />
      <ButtonStartAProject />
    </Section>
  );
};

export default Home;
