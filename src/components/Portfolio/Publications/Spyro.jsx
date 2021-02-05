import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';
import Explicit from "../../reusables/Explicit";

import { photos } from '../../galleries/Publications/gallery-spyro';
import Cover from '../../../assets/images/Portfolio/publications/StreetsSheets/0_cover-eng.jpg'
import '../../../assets/css/styles.css';

function Spyro() {
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
        <Explicit />
        <div className="scrolldown-stop" id="past-warning">
          <p>&nbsp;</p>
        </div>
        <div className="publisolo-container publisolo-head">
          <h2>Thanks for releasing me</h2>
          <div className="book-presentation">
            <img src={Cover} alt="couverture montrant un dragon de cristal" className="book-cover"/>
            <div className="book-infos">
              <p className="title-widescreen">Thanks for releasing me</p>
              <div className="book-details">
                <p>Dessin et couleur&nbsp;: Salem Drenay<br/>
                88 pages<br/>
                Spyro the dragon &amp; characters &copy; Toys for Bob, Activision</p>
              </div>
              <div className="separation"></div>
              <div className="book-resume">
                <p>TEXTE TEMPORAIRE<br/>
                Fox Mask Man - Memories With The Yokai is a 2015 Inktober project. It contains a set of 31 print illustrations in 17.5x25, giving a rare and intimate glimpse of the titular character and his personal relationships with the monsters of Japanese folklore.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="publisolo-container publisolo-gallery">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
      </div>
    </div>
  );
}

export default Spyro;