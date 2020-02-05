import React, { Fragment } from "react";
import styled from "styled-components";
import { setColor } from "../globals/styles";
import Nav from "../Nav";
import Title from "../Title";
const Header = ({ className }) => {
  return (
    <section className={className}>
      <Title title="Joseph" />
      <Nav />
    </section>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  background: ${props => props.theme.bannerBackground};
  color: ${props => props.theme.bannerColor};

  position: static;
  width: 100%;
`;
