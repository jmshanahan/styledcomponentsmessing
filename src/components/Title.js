import React from "react";
import styled from "styled-components";
import { setFont } from "./globals/styles";

import { TitleLink } from "../components/globals/Navlink";

export const Title = ({ className, title }) => {
  return (
    <h2 className={className}>
      <TitleLink to="/">{title}</TitleLink>
    </h2>
  );
};

export default styled(Title)`
  ${setFont.slanted};
  margin: 0.5em;
`;
