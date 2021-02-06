import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';

import { photos } from '../../galleries/Publications/gallery-fireheart';
import Cover from '../../../assets/images/Portfolio/publications/Fireheart/couv_lcef.jpg'
import '../../../assets/css/styles.css';

function FireHeart() {
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
          <h2>Le Cœur en Feu</h2>
          <div className="book-presentation">
            <img src={Cover} alt="couverture montrant une adolescente et un monstre cornu qui courent" className="book-cover"/>
            <div className="book-infos">
              <p className="title-widescreen">Le Cœur en Feu</p>
              <div className="book-details">
                <p>Scénario, texte et dessin&nbsp;: Salem Drenay<br/>
                120 pages (roman illustré)</p>
              </div>
              <div className="separation"></div>
              <div className="book-resume">
                <p>Clémentine n'a jamais eu peur. Jamais. Son amitié avec un être que tout le monde qualifierait de monstre, Barovi, n'y est pas pour rien. Du coup, le soir où il vient la voir pour lui annoncer qu'il part à la recherche d'une amie enlevée, elle passe dans son monde pour l'aider. Mais tout ce que lui voit, c'est qu'elle se met en danger. Et impossible de la renvoyer chez elle : le passage est détruit.</p>
                <p>Tous deux se lancent donc sur la piste de la disparue. Une piste qui les mènera aux quatre coins de cet autre monde, en passant par un New York de momies géantes et Venise transformée en repaire de pirates volants. Mais à mesure que les disputes dues aux divergences d'opinion s'effacent et que l'amitié se renforce, Clémentine et Barovi prennent conscience de l'ampleur de l'ennemi auquel ils se sont attaqués.</p>
                <p>Et pour ne rien arranger, des sentiments enfouis refont surface. Comme cette colère destructrice qui pourrait bien les pousser à tuer.</p>
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

export default FireHeart;