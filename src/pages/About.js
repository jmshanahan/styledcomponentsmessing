import React from "react";
import styled from "styled-components";
import Header from "../components/home/Header";

const About = () => {
  return (
    <div>
      <Header />
      <AboutWrapper>
        <p>About</p>
      </AboutWrapper>
    </div>
  );
};
const AboutWrapper = styled.section`
  margin: 10px, auto;
`;
export default About;
