import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';

import { photos } from '../../galleries/Publications/gallery-armello';
import Cover from '../../../assets/images/Portfolio/publications/Armello/01_couv.png'
import '../../../assets/css/styles.css';

function Armello() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="publisolo">
        <div className="publisolo-container publisolo-head">
          <h2>La couronne d'Armello</h2>
          <div className="book-presentation">
            <img src={Cover} alt="couverture montrant un groupe d'animaux qui attaque un lion" className="book-cover"/>
            <div className="book-infos">
              <p className="title-widescreen">La couronne d'Armello</p>
              <div className="book-details">
                <p>Scénario, texte et dessin&nbsp;: Salem Drenay<br/>
                42 pages (fanzine)<br/>
                Armello (jeu et personnages) &copy; League of Geeks</p>
              </div>
              <div className="separation"></div>
              <div className="book-resume">
                <p>Le Déclin se répand dans le royaume. Il a déjà corrompu le roi. Armello est en train de sombrer.</p>
                <p>Le clan des bandits, mené par la renarde Scarlet, décide de profiter des querelles entre les grandes puissances pour s'emparer de la couronne. Chacun sait ce qu'il a à faire. Il n'y a plus qu'à avancer ses pièces.</p>
                <p>Mais le Déclin est une force retorse et tous ne vivront pas pour voir l'issue de la bataille.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="publisolo-container publisolo-gallery">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                <div className="subillu-gallery">
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </div>
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
      </div>
    </div>
  );
}

export default Armello;