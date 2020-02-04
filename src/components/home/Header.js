import React, { Fragment } from "react";
import styled from "styled-components";
import { setColor } from "../globals/styles";
import Nav from "../Nav";

const Header = ({ className }) => {
  return (
    <section className={className}>
      <Nav />
    </section>
  );
};

export default styled(Header)`
  background: red;
  position: static;
  width: 100%;
`;
