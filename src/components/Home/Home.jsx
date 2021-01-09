import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/css/Home/Home.css';

function Home() {
    return (
        <section className="welcome-banner">
            <img className="logo" src={logo} alt="logo" />
            <h1>Salem Drenay</h1>
        </section>
    )
}

export default Home;