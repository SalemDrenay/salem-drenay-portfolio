import React from 'react';
import Navbar from '../reusables/Navbar';
import Social from '../reusables/Social';
import portrait from '../../assets/images/Home/portrait.png';

function About() {
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="about-box">
                    <h2>À propos</h2>
                    <p>Bonjour ! Je me présente : Salem Drenay.<br/>
                        J’ai grandi dans la région bordelaise. Illustrateur, programmeur et auteur, je passe le plus clair de mon temps à créer et développer des univers variés et riches. Diplômé de l’Ecole Supérieure des Métiers de l’Image ainsi que de la Wild Code School, j’ai fait mes armes dans plusieurs entreprises de la région et dans divers salons.<br/>
                        Ne vous fiez pas à mon air généralement fatigué ; je travaille rapidement et ferai tout ce qu’il faut pour répondre à votre demande.<br/>
                        Je réussis également très bien les tartes aux pommes.<br/>
                        RESEAUX
                    </p>
                    <Social />
                </div>
                <img src={portrait} className="portrait-about" alt="portrait de Salem"></img>
            </div>
        </>
    )
}

export default About;