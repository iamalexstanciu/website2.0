import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

const ButtonSAP = styled.div`
  @import url("https://fonts.cdnfonts.com/css/mars-project");

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70%;
  z-index: 200;
  width: fit-content;
  left: calc(75% - 150px);

  .btn-home {
    border: none !important;
    font-size: 22px;
    font-family: "Mars-Project", sans-serif;
    background-color: transparent;
    color: #fc4308;
    opacity: 1;
    width: fit-content;
    z-index: 200;
    transform: scale(1);
    text-transform: lowercase;
  }

  .btn-home:hover {
    .arrow-button-home {
      transform: rotate(45deg);
      transition: 300ms linear all;
      position: relative;
      top: 3rem;
      left: 5%;
    }
  }

  @media screen and (max-width: 1150px) {
    width: 100%;
    left: 25%;

    .btn-home {
      width: 60%;
      font-size: 18px;
    }

    .arrow-button-home {
      width: 20%;
    }
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    left: 25%;

    .btn-home {
      width: 60%;
      font-size: 18px;
    }

    .arrow-button-home {
      width: 20%;
    }
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    left: 10%;

    .btn-home {
      width: 90%;
      font-size: 18px;
      height: 40%;
    }

    .arrow-button-home {
      width: 20%;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    left: 10%;

    .btn-home {
      width: 80%;
      font-size: 16px;
    }

    .arrow-button-home {
      width: 15%;
    }
  }

  @media screen and (max-width: 360px) {
    width: 100vw;

    .btn-home {
      width: 100%;
      font-size: 14px;
    }

    .arrow-button-home {
      width: 15%;
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
        <svg
          className="arrow-button-home"
          width="126px"
          height="126px"
          viewBox="2 0 30 5"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.192"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#ffffff"
              strokeWidth="1.344"
              strokeLinecap="round"
              strokeLinejoin="round"></path>{" "}
          </g>
        </svg>
      </button>
    </ButtonSAP>
  );
};

export default ButtonStartAProject;
