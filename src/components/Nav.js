import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/content">Content</NavLink>
    </nav>
  );
};
const NavLink = styled(Link)`
  padding: 20px;
  color: white;

  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;

export default styled(Nav)`
  color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`;
