import React from 'react';
import { Link } from 'react-router-dom';

function Illustration() {
    return (
        <div className="illustration">
            <h2>Illustration</h2>
            <div className="illu-cards">
                <Link to={`/illustration/bd`} className="filter-card filter-bd">
                    <h3>BD</h3>
                </Link>
                <Link to={`/illustration/posters`} className="filter-card filter-posters">
                    <h3>Affiches / Couvertures</h3>
                </Link>
                <div className="filter-card filter-vectoriel">
                    <h3>Vectoriel</h3>
                </div>
                <div className="filter-card filter-fanart">
                    <h3>Fanart</h3>
                </div>
                <div className="filter-card filter-jdr">
                    <h3>Jeu de rôle</h3>
                </div>
                <div className="filter-card filter-scenes">
                    <h3>Scènes</h3>
                </div>
                <div className="filter-card filter-characterdesign">
                    <h3>Character design</h3>
                </div>
                <div className="filter-card filter-conceptart">
                    <h3>Concept art</h3>
                </div>
                <div className="filter-card filter-logo">
                    <h3>Logos / Titres</h3>
                </div>
                <div className="filter-card filter-sketches">
                    <h3>Croquis</h3>
                </div>
            </div>
        </div>
    )
}

export default Illustration;