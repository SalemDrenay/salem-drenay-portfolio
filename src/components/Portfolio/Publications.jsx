import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../reusables/Navbar';
import '../../assets/css/styles.css'

function Publications() {
    return (
        <>
            <Navbar />
            <div className="publications">
                <h2>Publications</h2>
                <div className="publication-cards">
                    <Link to={`/publications/ofstreetsandsheets`} className="filter-card filter-streetsSheets">
                        <h3>Of Streets &amp; Sheets</h3>
                    </Link>
                    <Link to={`/publications/posters`} className="filter-card filter-immortalsTrouble">
                        <h3>Immortels à Problèmes</h3>
                    </Link>
                    <Link to={`/publications/vector`} className="filter-card filter-armello">
                        <h3>La couronne d'Armello</h3>
                    </Link>
                    <Link to={`/publications/thanksforreleasingme`} className="filter-card filter-spyro">
                        <h3>Thanks for releasing me</h3>
                    </Link>
                    <Link to={`/publications/fanart`} className="filter-card filter-fireheart">
                        <h3>Le Cœur en Feu</h3>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Publications;