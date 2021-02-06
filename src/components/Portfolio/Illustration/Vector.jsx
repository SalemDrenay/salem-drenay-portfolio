import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';
import { photos } from "../../galleries/gallery-vector";
import '../../../assets/css/styles.css';

function Vector() {
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
      <div className="subillu">
        <div className="subillu-container">
          <h2>Vectoriel</h2>
          <div className="illu-linkto-cards">
            <Link to={`/illustration/bd`} className="linkto-card filter-armello">
                <h3>Armello</h3>
            </Link>
            <Link to={`/illustration/bd`} className="linkto-card filter-fireheart">
                <h3>Le Cœur en Feu</h3>
            </Link>
          </div>

          <div className="subillu-gallery">
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
    </div>
  );
}

export default Vector;