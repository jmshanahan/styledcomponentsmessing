import React from "react";
import styled from "styled-components";
const Welcome = () => {
  return (
    <WelcomeCentre>
      <h1>Welcome</h1>
    </WelcomeCentre>
  );
};

const WelcomeCentre = styled.section`
  margin: 200px, auto;
`;

export default Welcome;
