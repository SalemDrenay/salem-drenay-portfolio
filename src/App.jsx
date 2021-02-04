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
import ConceptArt from './components/Portfolio/Illustration/ConceptArt';
import PrideArmors from './components/Portfolio/Illustration/PrideArmors';
import Mytholodex from './components/Portfolio/Illustration/Mytholodex';
import Fanart from './components/Portfolio/Illustration/Fanart';

import CloudCity from './components/Portfolio/Illustration/Conceptart/CloudCity';
import Drenay from './components/Portfolio/Illustration/Conceptart/Drenay';
import PreyMask from './components/Portfolio/Illustration/Conceptart/PreyMask';
import ConceptHybrides from './components/Portfolio/Illustration/Conceptart/ConceptHybrides';
import ConceptAnubis from './components/Portfolio/Illustration/Conceptart/ConceptAnubis';

import Digimon from './components/Portfolio/Illustration/Fanart/Digimon';
import Pokemon from './components/Portfolio/Illustration/Fanart/Pokemon';
import HarryPotter from './components/Portfolio/Illustration/Fanart/HarryPotter';
import HollowKnight from './components/Portfolio/Illustration/Fanart/HollowKnight';
import Ori from './components/Portfolio/Illustration/Fanart/Ori';
import Cartoons from './components/Portfolio/Illustration/Fanart/Cartoons';
import LiS from './components/Portfolio/Illustration/Fanart/LiS';
import NitW from './components/Portfolio/Illustration/Fanart/NitW';

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
          <Route exact path="/illustration/mytholodex">
            <Mytholodex />
          </Route>
          <Route exact path="/illustration/pridearmors">
            <PrideArmors />
          </Route>

          <Route exact path="/illustration/fanart">
            <Fanart />
          </Route>
          <Route exact path="/illustration/fanart/digimon">
            <Digimon />
          </Route>
          <Route exact path="/illustration/fanart/pokemon">
            <Pokemon />
          </Route>
          <Route exact path="/illustration/fanart/harrypotter">
            <HarryPotter />
          </Route>
          <Route exact path="/illustration/fanart/hollowknight">
            <HollowKnight />
          </Route>
          <Route exact path="/illustration/fanart/ori">
            <Ori />
          </Route>
          <Route exact path="/illustration/fanart/cartoons">
            <Cartoons />
          </Route>
          <Route exact path="/illustration/fanart/lifeisstrange">
            <LiS />
          </Route>
          <Route exact path="/illustration/fanart/nightinthewoods">
            <NitW />
          </Route>

          <Route exact path="/illustration/conceptart">
            <ConceptArt />
          </Route>
          <Route exact path="/illustration/conceptart/cloudcity">
            <CloudCity />
          </Route>
          <Route exact path="/illustration/conceptart/drenay">
            <Drenay />
          </Route>
          <Route exact path="/illustration/conceptart/preymask">
            <PreyMask />
          </Route>
          <Route exact path="/illustration/conceptart/hybrides">
            <ConceptHybrides />
          </Route>
          <Route exact path="/illustration/conceptart/anubis">
            <ConceptAnubis />
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
