// font-family: 'Lato', sans-serif;
// font-family: 'Courgette', cursive;

import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "./styles";

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        ${setFont.main};
        font-size:100%;
        color: ${props => props.theme.mainBlack};
        background: ${props => props.theme.bodyBackground};
    }
    h1{
        font-size: 3em;
        line-height: 1.2;
        margin-bottom: 0.5em;
    }    
    h2{
        font-size: 2em;
        margin-bottom: 0.75em;
    }
    h3{
        font-size: 1.5em;
        line-height: 1;
        margin-bottom: 1em;
    }
    h4{
        font-size: 1.2em;
        line-height: 1.2;
        margin-bottom: 1.25em;
        font-weight: bold;
    }
    h5{
        font-size: 1em;
        margin-bottom: 1.5em;
        font-weight: bold;

    }
    h6{
        font-size: 1em;
        font-weight: bold;
    }
    p{
        line-height: 1.5em;
        margin: 0 0 1.5rem 0;
    }
`;

export default Globals;
