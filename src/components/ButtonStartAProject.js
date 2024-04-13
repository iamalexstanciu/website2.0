import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import Arrow from "../assets/images/arrow.png";

const ButtonSAP = styled.div`
  @import url("https://fonts.cdnfonts.com/css/mars-project");

  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  position: absolute;
  top: 22.5rem;
  left: 0;
  height: 100vh; // Full viewport height
  width: 100vw; // Full viewport width
  z-index: 200;

  .btn-home {
    display: flex; // To keep text and arrow inline
    align-items: center; // Align text and arrow vertically
    justify-content: center; // Center text and arrow within the button
    padding: 0.5rem 1rem; // Padding around text and arrow
    border: none !important;
    font-size: clamp(18px, 5vw, 38px);
    font-family: "Mars-Project", sans-serif;
    background-color: transparent;
    color: #fc4308;
    opacity: 1;
    transform: scale(1);
    text-transform: lowercase;
    cursor: pointer;
    text-shadow: 2px 5px 3px #000000;
  }

  .arrow-button-home {
    margin-left: 0.5rem; // Space between text and arrow
    height: 4rem; // Fixed height
    width: auto; // Maintain aspect ratio
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .btn-home:hover .arrow-button-home {
    transform: rotate(45deg);
  }

  @media screen and (max-width: 600px) {
    .btn-home {
      font-size: 18px;
    }
    .arrow-button-home {
      height: 2rem;
    }
  }

  @media screen and (max-width: 360px) {
    .btn-home {
      font-size: 14px;
    }
  }
`;

const ButtonStartAProject = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <ButtonSAP>
      <button className="btn-home" onClick={() => handleScroll("#contact")}>
        Let's Build your Future on Web{" "}
        <img className="arrow-button-home" src={Arrow} alt="arrow" />
      </button>
    </ButtonSAP>
  );
};

export default ButtonStartAProject;
