import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/Home/About';
import FilterPortfolio from './components/Portfolio/FilterPortfolio';
import Shop from './components/Home/Shop';
import Contact from './components/Home/Contact';

import Illustration from './components/Portfolio/Illustration';
import Webdesign from './components/Portfolio/Webdesign';
import Publications from './components/Portfolio/Publications';

import Comics from './components/Portfolio/Illustration/Comics';
import Posters from './components/Portfolio/Illustration/Posters';
import Vector from './components/Portfolio/Illustration/Vector';
import Rpg from './components/Portfolio/Illustration/Rpg';

import './assets/css/styles.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <FilterPortfolio />
          </Route>

          <Route exact path="/illustration">
            <Illustration />
          </Route>
          <Route exact path="/illustration/bd">
            <Comics />
          </Route>
          <Route exact path="/illustration/posters">
            <Posters />
          </Route>
          <Route exact path="/illustration/vector">
            <Vector />
          </Route>
          <Route exact path="/illustration/rpg">
            <Rpg />
          </Route>
          
          <Route exact path="/webdesign">
            <Webdesign />
          </Route>
          <Route exact path="/publications">
            <Publications />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
