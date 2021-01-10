import React from 'react';
import Navbar from '../reusables/Navbar';
import logo from '../../assets/images/logo.png';
import '../../assets/css/Home/Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <section className="welcome-banner">
                <img className="logo" src={logo} alt="logo de Salem Drenay" />
                <h1>Salem Drenay</h1>
            </section>
        </>
    )
}

export default Home;