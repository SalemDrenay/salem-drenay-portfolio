import React, { useState, useEffect } from 'react';
import '../../assets/css/styles.css';

import artstation from '../../assets/images/icones/artstation.svg';
import furaffinity from '../../assets/images/icones/furaffinity.svg';
import instagram from '../../assets/images/icones/instagram.svg';
import linkedin from '../../assets/images/icones/linkedin.svg';
import twitter from '../../assets/images/icones/twitter.svg';
import youtube from '../../assets/images/icones/youtube.svg';

function Social() {
    return (
        <div className="social-container">
            <a href="https://www.artstation.com/salem_drenay" target="_blank">
                <img className="social-icon" src={linkedin} alt="lien vers linkedin" />
            </a>
            <a href="https://www.artstation.com/salem_drenay" target="_blank">
                <img className="social-icon" src={artstation} alt="lien vers artstation" />
            </a>
            <a href="https://www.instagram.com/salemdrenay/" target="_blank">
                <img className="social-icon" src={instagram} alt="lien vers instagram" />
            </a>
            <a href="https://twitter.com/SDrenay" target="_blank">
                <img className="social-icon" src={twitter} alt="lien vers twitter" />
            </a>
            <a href="https://www.furaffinity.net/user/thevoidwalker/" target="_blank">
                <img className="social-icon" src={furaffinity} alt="lien vers furaffinity" />
            </a>
            <a href="https://www.youtube.com/channel/UClzxU6t826pDGQKepQUoxsA" target="_blank">
                <img className="social-icon" src={youtube} alt="lien vers youtube" />
            </a>
        </div>
    )
}

export default Social;