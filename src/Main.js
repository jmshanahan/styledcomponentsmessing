import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/globals/Globalstyles";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Content from "./pages/Content";
function Main() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/content" component={Content} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Main;
