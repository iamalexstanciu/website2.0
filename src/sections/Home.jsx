import React, { useState } from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
// import Location from "../components/Location";
import ButtonStartAProject from "../components/ButtonStartAProject";
import MainBox from "../components/MainBox";
import ChatIcon from "../assets/images/chat.png";
import CloseIcon from "../assets/images/close.png";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;



const ChatIconImage = styled.img`
  width: 2vw;

  &&:hover {
    transition: 0.5s;
    width: 5vw;
  }
`;

const CloseIconImage = styled.img`
  width: 2vw;

  &&:hover {
    transition: 0.5s;
    width: 5vw;
  }
`;

const ButtonChatbot = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  z-index: 10000;
  background-color: transparent; // Set the background color to transparent
  border: none;
`;

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <Section style={{ border: "none" }} id="home">
      <CoverVideo />
      {/* <Location /> */}
      <Logo />
      <ButtonStartAProject />
      <ButtonChatbot
        className="button-toggle-chatbot"
        onClick={handleToggleChatbot}
      >
        {showChatbot ? (
          <CloseIconImage src={CloseIcon} alt="Close Icon" />
        ) : (
          <ChatIconImage src={ChatIcon} alt="Chat Icon" />
        )}
      </ButtonChatbot>
      {showChatbot ? (
        <>
          {console.log("Rendering MainBox component")}
          <MainBox />
        </>
      ) : null}
    </Section>
  );
};

export default Home;
