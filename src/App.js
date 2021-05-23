import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Webdev from "./pages/Webdev/Webdev";
import Engineering from "./pages/Engineering/Engineering";
import Resume from "./pages/Resume/Resume";

export default function App() {
  return (
    <Router basename='/'>
      <div>
        <Switch>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/web-development"}>
            <Webdev />
          </Route>
          <Route exact path={"/engineering"}>
            <Engineering />
          </Route>
          <Route exact path={"/resume"}>
            <Resume />
          </Route>
          <Route exact path={["/", "/portfolio"]}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
