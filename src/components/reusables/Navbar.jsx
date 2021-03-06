import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css';

function Home() {
    return (
        <div className="navbar">
            <h3>Salem Drenay</h3>
            <ul className="nav-links">
                <Link to={'/'}>
                    <li>Accueil</li>
                </Link>
                <Link to={'/about'} className="nav-link">
                    <li>À propos</li>
                </Link>
                <Link to={'/portfolio'} className="nav-link">
                    <li>Portfolio</li>
                </Link>
                <Link to={'/contact'} className="nav-link">
                    <li>Contact</li>
                </Link>
            </ul>
            <div id="menu-burger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                      
                <ul id="menu">
                    <Link to={'/'}>
                        <li>Accueil</li>
                    </Link>
                    <Link to={'/about'} className="nav-link">
                        <li>À propos</li>
                    </Link>
                    <Link to={'/portfolio'} className="nav-link">
                        <li>Portfolio</li>
                    </Link>
                    <Link to={'/contact'} className="nav-link">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Home;