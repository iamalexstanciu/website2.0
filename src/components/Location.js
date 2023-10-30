import React from "react";
import styled from "styled-components";

const Loc = styled.div`
  @import url("https://fonts.cdnfonts.com/css/mars-project");

  display: flex;
  flex-direction: column;
  gap: 2%;
  color: #fc4308;
  position: absolute;
  top: -4%;
  left: 80%;
  width: 20%;
  height: 20%;
  z-index: 3;
  justify-content: center;
  align-items: center;

  p {
    color: lightgray;
    font-size: 20px;
    font-family: "Mars-Project", sans-serif;
  }

  @media screen and (max-width: 1200px) {
    width: 30%;
    left: 70%;
    p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 50%;
    top: 0%;
    left: 26%;
    p {
      font-size: 15px;
    }
  }
`;

const Location = () => {
  return (
    <Loc>
      <p className="location-p">
        Bucharest ▪ Romania
        <br />
        44.4268° N / 26.1025° E
      </p>
    </Loc>
  );
};

export default Location;
