import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';
import Explicit from "../../reusables/Explicit";

import { photos } from '../../galleries/Publications/gallery-streetsSheets';
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
            <img src={Cover} alt="couverture du tome 1 de Of Streets &amp; Sheets" className="book-cover"/>
            <div className="book-infos">
              <p className="title-widescreen">Of Streets &amp; Sheets</p>
              <div className="book-details">
                <p>Scénario, dessin et couleur&nbsp;: Salem Drenay<br/>
                40 pages</p>
              </div>
              <div className="separation"></div>
              <div className="book-resume">
                <p>Il est parfois difficile de joindre les deux bouts. C’est le cas de Jeremiah, un père qui ferait n’importe quoi pour ses deux petites filles.</p>
                <p>La solution qu’il a trouvée ? La prostitution.</p>
                <p>Malgré cela, il se retrouve acculé le jour où il doit régler des frais d’hospitalisation imprévus. Le coût est trop élevé, impossible d’y faire face. Sa seule issue réside dans le marché que lui propose l’un des médecins.</p>
                <p>Aux abois, Jeremiah accepte.<br/>
                Mais il s’avère bien vite qu’il a passé un pacte avec le diable.</p>
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