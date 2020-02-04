import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { createGlobalStyle } from "styled-components";
import Main from "./Main";

const wrapper = document.getElementById("app");

const App = () => <Main />;
ReactDOM.render(<App />, wrapper);
