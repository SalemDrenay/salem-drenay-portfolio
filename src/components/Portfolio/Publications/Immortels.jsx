import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';

import { photos } from '../../galleries/Publications/gallery-immortels';
import Cover from '../../../assets/images/Portfolio/publications/Immortels/p0_couv.jpg'
import '../../../assets/css/styles.css';

function Immortels() {
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
          <h2>Immortels à Problèmes</h2>
          <div className="book-presentation">
            <img src={Cover} alt="couverture montrant Anubis et un vampire sur un tas de crânes" className="book-cover"/>
            <div className="book-infos">
              <p className="title-widescreen">Immortels à Problèmes</p>
              <div className="book-details">
                <p>Scénario, dessin et couleur&nbsp;: Salem Drenay<br/>
                30 pages (BD)</p>
              </div>
              <div className="separation"></div>
              <div className="book-resume">
                <p>Anubis, autrefois passeur d'âmes de tout un peuple et dieu égyptien de l'embaumement, opère aujourd'hui en tant que médium. Il partage son quotidien (et son lit) avec Stefano, vampire pluricentenaire et excellent cuisinier. Tous deux n'aspirent qu'à mener une existence tranquille.</p>
                <p>Le souci, c'est que quand on est deux immortels, on attire deux fois plus d'ennuis. Ensemble, ils affrontent toutes les menaces, qu'elles soient humaines, surnaturelles... voire divines, mais là c'est tout de même un peu abusé !</p>
                <p>Alors quand les morts se mettent à revenir à la vie, ils savent qu'ils ont tout intérêt à réagir vite avant que la ville ne se transforme en zombie party géante. Question : Quel sera le prix à payer ?</p>
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

export default Immortels;