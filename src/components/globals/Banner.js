import React from "react";
import styled, { css, keyframes } from "styled-components";
import Nav from "../Nav";
import { setColor, setRem, setLetterSpacing, setBorder, media } from "./styles";
const Banner = ({ className }) => {
  return (
    <header className={className}>
      <Nav />
    </header>
  );
};
const BannerWrapper = styled(Banner)`
  background: ${setColor.bannerColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
export default BannerWrapper;
