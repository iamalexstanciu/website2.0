import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

const ButtonSAP = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70%;
  z-index: 200;
  width: fit-content;
  left: calc(75% - 130px);

  .btn-home {
    border: none !important;
    padding: 20px 30px;
    font-size: 26px;
    background-color: transparent;
    color: #fc4308;
    opacity: 1;
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
      <button class="btn-home" onClick={() => handleScroll("#contact")}>
        Let's Build your Future on Web{" "}
        <svg
          className="arrow-button-home"
          width="126px"
          height="126px"
          viewBox="2 0 30 5"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.192"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#ffffff"
              stroke-width="1.344"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{" "}
          </g>
        </svg>
      </button>
    </ButtonSAP>
  );
};

export default ButtonStartAProject;
