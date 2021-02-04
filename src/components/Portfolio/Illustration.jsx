import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../reusables/Navbar';
import '../../assets/css/styles.css'

function Illustration() {
    return (
        <>
            <Navbar />
            <div className="illustration">
                <h2>Illustration</h2>
                <div className="illu-cards">
                    <Link to={`/illustration/bd`} className="filter-card filter-bd">
                        <h3>BD</h3>
                    </Link>
                    <Link to={`/illustration/posters`} className="filter-card filter-posters">
                        <h3>Affiches &amp; Couvertures</h3>
                    </Link>
                    <Link to={`/illustration/vector`} className="filter-card filter-vectoriel">
                        <h3>Vectoriel</h3>
                    </Link>
                    <Link to={`/illustration/fanart`} className="filter-card filter-fanart">
                        <h3>Fanart</h3>
                    </Link>
                    <Link to={`/illustration/rpg`} className="filter-card filter-jdr">
                        <h3>Jeu de rôle</h3>
                    </Link>
                    <Link to={`/illustration/conceptart`} className="filter-card filter-conceptart">
                        <h3>Concept art</h3>
                    </Link>
                    <Link to={`/illustration/mytholodex`} className="filter-card filter-mytholodex">
                        <h3>Mytholodex</h3>
                    </Link>
                    <Link to={`/illustration/pridearmors`} className="filter-card filter-armors">
                        <h3>Pride Armors</h3>
                    </Link>
                    <div className="filter-card filter-sketches">
                        <h3>Croquis</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Illustration;