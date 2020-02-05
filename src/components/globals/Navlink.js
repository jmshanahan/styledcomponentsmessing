import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  padding: 1em;

  ${props => `color: ${props.color ? props.color : props.theme.bannerColor}`};
  position: relative;

  text-decoration: none;
  &:hover,
  &:focus {
    ${props => `color: ${props.hovercolor ? props.hovercolor : "azure "}`};

    opacity: 0.9;
    outline: none;
  }
`;
const TitleLink = styled(Link)`
  padding: 1em;

  position: relative;
  ${props =>
    `color: ${
      props.theme.mainWhite ? props.theme.mainWhite : "rgb(245, 245, 245)"
    }`};
  text-decoration: none;
  &:hover,
  &:focus {
    color: "azure ";
    opacity: 0.9;
    outline: none;
  }
`;
export { TitleLink };
