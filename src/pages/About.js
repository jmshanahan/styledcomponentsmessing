import React from "react";
import styled from "styled-components";
import Header from "../components/home/Header";

const About = () => {
  return (
    <div>
      <Header />
      <AboutWrapper>
        <h1>About</h1>
      </AboutWrapper>
    </div>
  );
};
const AboutWrapper = styled.section`
  margin: 10px;
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
`;
export default About;
