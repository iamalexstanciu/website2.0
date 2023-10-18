import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

const ButtonSAP = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 85%;
  z-index: 200;
  width: 15%;
  left: calc(90% - 130px);

  .btn {
    line-height: 1;
    padding: 20px 30px;
    background-color: #0000;
    border-radius: 200px;
    font-size: 18px;
    outline: none;
    color: #fc4308;
    opacity: 1;
    z-index: 200;
    transform: scale(1);
    animation: pulse 2s infinite;
    text-transform: lowercase;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
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
      <button class="btn" onClick={() => handleScroll("#contact")}>
        Start a Project
      </button>
    </ButtonSAP>
  );
};

export default ButtonStartAProject;
