import React from "react";
import { Link } from 'react-router-dom';

import Navbar from '../../../reusables/Navbar';
import Banner from '../../../../assets/images/Portfolio/illu/conceptart/drenay/banner.jpg';
import '../../../../assets/css/styles.css';

function Drenay() {
  return (
    <div>
      <Navbar />
      <div className="subillu">
        <div className="subillu-container">
          <h2>Drenay</h2>
          <div className="subillu-header">
            <img src={Banner} alt="bannière avec le logo de Drenay dans un rouage"/>
            <p>Drenay est un univers dont les bases ont été imaginées par le studio Legio. Le hasard a fait que le nom de leur création et mon pseudonyme soient identiques. Et comme ils cherchaient un concept artist, ils m’ont contacté pour que je développe cet univers.<br />
            Voici la base qui m'a été fournie lorsque j'ai commencé :<br />
            " L'univers de Drenay est constitué de plusieurs mondes : Eleyras (monde de technologie), Lakeyras (proche des légendes arthuriennes) et Khaneyras (où le sang et le sacrifice priment), qui gravitent autour d’Eyras (monde central rappelant l’antiquité romaine). Il existe également un cinquième domaine, dont on ne sait absolument rien. Tout tourne autour d’une énergie dans cet univers : l’énergie Drenay. Chaque monde l’utilise d’une façon différente et la considère différemment. Avec tous les échanges, mais également conflits et dissensions que cela peut engendrer… "<br />
            C’est à partir de ce descriptif que j’ai développé les différentes espèces peuplant ces mondes, leur culture et leurs personnalités marquantes, les divers biomes, les lieux importants, les moyens de transport… J'ai également fait plusieurs recherches d'interface et réalisé une partie des visuels définitifs.</p>
          </div>
          <div className="illu-linkto-cards">
            <Link to={`/illustration/conceptart/drenay/arena`} className="linkto-card filter-drenay-arena">
                <h3>Arena</h3>
            </Link>
            <Link to={`/illustration/conceptart/drenay/koharii`} className="linkto-card filter-drenay-koharii">
                <h3>Koharii</h3>
            </Link>
            <Link to={`/illustration/conceptart/drenay/architecture`} className="linkto-card filter-drenay-archi">
                <h3>Architecture &amp; décors</h3>
            </Link>
            <Link to={`/illustration/conceptart/drenay/worldbuilding`} className="linkto-card filter-drenay-worldbuilding">
                <h3>Worldbuilding</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drenay;