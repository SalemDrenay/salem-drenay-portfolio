import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';
import Explicit from "../../reusables/Explicit";

import { photos } from '../../galleries/Publications/gallery-spyro';
import Cover from '../../../assets/images/Portfolio/publications/Spyro/0_couv.jpg'
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
                88 pages (fanzine)<br/>
                Spyro the dragon &amp; characters &copy; Toys for Bob, Activision</p>
              </div>
              <div className="separation"></div>
              <div className="book-resume">
                <p>75 dragons<br/>
                5 mondes<br/>
                1 règle : la n°34</p>
                <p>Recueil d'illustrations met en scène les dragons adultes du jeu Spyro Reignited Trilogy. Chacun d'entre eux y est représenté, ainsi que certains boss et Spyro lui-même.</p>
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

export default Spyro;