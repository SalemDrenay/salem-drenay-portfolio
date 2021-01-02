import React from 'react';
import { Link } from 'react-router-dom';

function Webdesign() {
    return (
        <div className="webdesign">
            <h2>Webdesign</h2>
            <div className="webdesign-cards">
                <Link to={`/illustration/bd`} className="filter-card filter-puntacana">
                    <h3>BD</h3>
                </Link>
                <Link to={`/illustration/posters`} className="filter-card filter-tlorean">
                    <h3>Affiches / Couvertures</h3>
                </Link>
            </div>
        </div>
    )
}

export default Webdesign;