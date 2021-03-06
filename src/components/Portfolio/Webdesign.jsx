import React from 'react';
import Navbar from '../reusables/Navbar';

function Webdesign() {
    return (
        <>
            <Navbar />
            <div className="webdesign">
                <h2>Webdesign</h2>
                <div className="webdesign-cards">
                    <a href="https://t-lorean-app.herokuapp.com/" target="_blank" rel="noreferrer" className="filter-card filter-tlorean">
                        <div className="filter-description">
                            <h3>T-Lorean</h3>
                            <p>-<br/>
                            réalisation d'un site dynamique de réservation, projet de groupe en méthode SCRUM<br/>
                            -<br/>
                            JavaScript, ReactJS, NodeJS et CSS</p>
                        </div>
                    </a>
                    <a href="https://practeex.herokuapp.com/login/" target="_blank" rel="noreferrer" className="filter-card filter-practeex">
                        <div className="filter-description">
                            <h3>Practeex Neurolab</h3>
                            <p>-<br/>
                            réalisation d'un site dynamique d'affichage de résultats d'expérimentations, projet de groupe en méthode SCRUM<br/>
                            -<br/>
                            JavaScript, ReactJS, NodeJS, Express et CSS</p>
                        </div>
                    </a>
                    <a href="https://punta-cana-bar-bx.netlify.app/" target="_blank" rel="noreferrer" className="filter-card filter-puntacana">
                        <div className="filter-description">
                            <h3>Punta Cana Bar</h3>
                            <p>-<br/>
                            refonte du site web d'un commerçant, projet de groupe en méthode SCRUM<br/>
                            -<br/>
                            HTML, CSS, JavaScript</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Webdesign;