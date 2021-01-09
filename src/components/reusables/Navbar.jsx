import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css';

function Home() {
    return (
        <div className="navbar">
            <h3>Salem Drenay</h3>
            <ul>
                <li>Accueil</li>
                <li>À propos</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Home;