import React from "react";
import styled from "styled-components";
import Navlink from "../components/globals/Navlink";
const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/about">About</Navlink>
      <Navlink to="/content">Content</Navlink>
    </nav>
  );
};

export default styled(Nav)`
  color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`;
