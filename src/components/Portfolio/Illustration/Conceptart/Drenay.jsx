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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad adipisci quas autem magni error tempore totam sint? Laudantium voluptatem quas pariatur nulla, excepturi dicta vitae iste distinctio quos voluptates?</p>
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