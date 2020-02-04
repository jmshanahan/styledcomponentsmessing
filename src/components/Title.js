import React from "react";
import styled from "styled-components";
export const Title = ({ className, title }) => {
  return <h2 className={className}>{title}</h2>;
};

export default styled(Title)`
  ${props => `color: ${props.color ? props.color : "red"}`};
  margin: 0.5em;
`;
