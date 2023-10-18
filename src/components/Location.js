import React from "react";
import styled from "styled-components";

const Loc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
  color: #fc4308;
  position: absolute;
  top: -4%;
  left: 82.5rem;
  width: 20%;
  height: 20%;
  z-index: 3;
  justify-content: center;
  align-items: center;

  p {
    color: lightgray;
    font-size: 20px;
  }
`;

const Location = () => {
  return (
    <Loc>
      <p class="location-p">
        Bucharest ▪ Romania
        <br />
        44.4268° N / 26.1025° E
      </p>
    </Loc>
  );
};

export default Location;
