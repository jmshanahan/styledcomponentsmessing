import React from "react";
import styled from "styled-components";
const Welcome = () => {
  return (
    <WelcomeCentre>
      <h1>Welcome</h1>
    </WelcomeCentre>
  );
};

const WelcomeCentre = styled.div`
  position: absolute;
  top: 200px;
  margin: 200px, auto;
`;

export default Welcome;
