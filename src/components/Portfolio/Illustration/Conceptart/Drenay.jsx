import React, { useState, useCallback } from "react";

import Navbar from '../../../reusables/Navbar';
import DrenayWorldbuilding from './DrenayWorldbuilding';
import DrenayArchi from './DrenayArchi';
import DrenayInterface from './DrenayInterface';
import DrenayKoharii from './DrenayKoharii';
import '../../../../assets/css/styles.css';

function Drenay() {
  return (
    <div>
      <Navbar />
      <div className="subillu">
        <div className="subillu-container">
            <h2>Drenay</h2>
            <DrenayWorldbuilding />
            <hr/>
            <DrenayArchi />
            <hr/>
            <DrenayInterface />
            <hr/>
            <DrenayKoharii />
        </div>
      </div>
    </div>
  );
}

export default Drenay;