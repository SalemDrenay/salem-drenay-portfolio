import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../reusables/Navbar';
import '../../assets/css/styles.css';

function FilterPortfolio() {
    return (
        <>
        <Navbar />
        <div className="filter-portfolio">
            <h2>Portfolio</h2>
            <div className="filter-portfolio-boxes">
                <Link to={`/illustration`} className="filter-portfolio-box filter-illustration-box">
                    <p>Illustration</p>
                </Link>
                <Link to={`/webdesign`} className="filter-portfolio-box filter-webdesign-box">
                    <p>Webdesign</p>
                </Link>
                <Link to={`/publications`} className="filter-portfolio-box filter-publications-box">
                    <p>Publications</p>
                </Link>
            </div>
        </div>
        </>
    )
}

export default FilterPortfolio;