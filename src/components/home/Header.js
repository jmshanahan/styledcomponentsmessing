import React, { Fragment } from "react";
import styled from "styled-components";
import { setColor } from "../globals/styles";
import Nav from "../Nav";
import Title from "../Title";
const Header = ({ className }) => {
  return (
    <section className={className}>
      <Title title="Joseph" color="Aqua" />
      <Nav />
    </section>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  background: blue;
  position: static;
  width: 100%;
`;
