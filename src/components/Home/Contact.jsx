import React from 'react';
import Navbar from '../reusables/Navbar';
import Social from '../reusables/Social';
import '../../assets/css/styles.css';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact">
                <div className="contact-container">
                    <h2>Me contacter</h2>
                    <div className="contact-box contact-coordonnées">
                        <h3>Mes coordonnées</h3>
                        <a href="tel:06 69 91 44 11"><p> 06.69.91.44.11</p></a>
                        <p>salemdrenay@gmail.com</p>
                    </div>
                    <div className="contact-box contact-cv">
                        <a href="/files/CV_damien-thibault_programmeur.pdf" target="_blank" download>
                            <div className="cv-download">
                                <h3>Télécharger mon CV</h3>
                            </div>
                        </a>
                    </div>
                    <div className="contact-box contact-social">
                        <h3>Réseaux</h3>
                        <Social />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;