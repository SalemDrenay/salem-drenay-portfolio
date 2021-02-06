import React from "react";

import ArrowDown from '../../assets/images/icones/down-arrow.png';
import '../../assets/css/styles.css';

function Explicit() {
  return (
    <div className="explicit">
      <p className="warning">Avertissement</p>
      <p className="explicit-message">Cette page contient du <span>matériel sexuellement explicite</span>.</p>
      <p className="explicit-message">Ne poursuivez que si vous avez au moins 18 ans.</p>
      <a href="#past-warning">
        <img
          src= {ArrowDown}
          className = "arrow-down"
          alt = "flèche pointant vers le bas"
        />
      </a>
    </div>
  );
}

export default Explicit;