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
                    <p>Bonjour ! Je me présente : Salem Drenay (alias Damien Thibault).</p>
                    <p>Auteur-illustrateur de mon état, j’ai fait mes armes dans plusieurs entreprises de la région bordelaise après avoir été diplômé de l’École Supérieure des Métiers de l’Image. J’ai opéré aussi bien dans la publicité que dans des commandes de particuliers. J’ai également participé à divers salons où je tenais un stand pour vendre mes productions, ce qui a occasionné un certain nombre de rencontres très intéressantes.</p>
                    <p>Après quelques années de travail dans cette branche, j’ai décidé d’ajouter une nouvelle casquette à ma panoplie et me suis orienté vers une formation de développeur web et web mobile à la Wild Code School. J’y ai appris les bases du JavaScript, de React, de NodeJS et Express au fil des cours et des projets de groupe. Le tout en conservant mon activité professionnelle à côté.</p>
                    <p>Aujourd’hui, cette formation est sur le point de se terminer et je me retrouve donc prêt à entrer sur le marché de l’emploi afin de renforcer mes connaissances de développeur. J’espère vous rencontrer bientôt !</p>
                    <div className="separation"></div>
                    <h3>Centres d’intérêt</h3>
                    <p>J’ai appris à faire du montage vidéo en autodidacte. Après quelques projets de groupe pour me faire la main, j’ai créé une chaîne youtube pour y poster des speedpaints de certains de mes travaux d’illustrateur.</p>
                    <p>Le worldbuilding me passionne ; j’aime étudier et construire des mondes variés et riches en prévision de futurs projets. J’ai toujours plusieurs univers en cours de développement, et quand bien même ça peut parfois être frustrant de ne pas s’y consacrer tout de suite, ça leur permet de mûrir et de se développer en attendant.</p>
                    <p>Je réussis également très bien les tartes aux pommes !</p>
                    <Social />
                </div>
                <img src={portrait} className="portrait-about" alt="portrait de Salem"></img>
            </div>
        </>
    )
}

export default About;