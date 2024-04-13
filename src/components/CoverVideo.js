import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/video/cover4.mp4";

const VideoContainer = styled.section`
  @import url("https://fonts.cdnfonts.com/css/mars-project");

  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-family: "Mars-Project", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 20px black;
  color: ${(props) => props.theme.text};

  h1 {
    font-family: "Mars-Project", sans-serif;
    text-transform: lowercase;
    font-size: clamp(40px, 7vw, 200px);
    text-align: center;
    color: white;
  }
  h2 {
    font-family: "Mars-Project", sans-serif;
    font-size: clamp(20px, 5vw, 30px);
    text-align: center;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: lowercase;
    font-weight: 400;
    color: white;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.15" data-scroll-speed="4">
            up
          </h1>
          <h1 data-scroll data-scroll-delay="0.10" data-scroll-speed="4">
            vision
          </h1>
          <h1 data-scroll data-scroll-delay="0.5" data-scroll-speed="4">
            Media
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.5" data-scroll-speed="4">
          Turning Ideas into Web Realities
        </h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
