import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Portfolio from "./pages/Portfolio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <HashRouter>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/sobre">
          <Sobre />
        </Route>
        <Route exact path="/contato">
          <Contato />
        </Route>
      </Switch>
    </HashRouter>
  );
}
