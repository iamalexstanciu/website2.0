import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/video/cover1.mp4";

const VideoContainer = styled.section`
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
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  h1 {
    font-family: "Rajdhani", sans-serif;
    font-size: ${(props) => props.theme.fontBig};
    text-align: center;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <h1>upvisionMedia</h1>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
