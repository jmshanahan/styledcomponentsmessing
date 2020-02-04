import React from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
const Content = () => {
  return (
    <ContentWrapper>
      <Header />
      <h1>Content</h1>
    </ContentWrapper>
  );
};
const ContentWrapper = styled.section`
  margin: 200px, auto;
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
`;
export default Content;
