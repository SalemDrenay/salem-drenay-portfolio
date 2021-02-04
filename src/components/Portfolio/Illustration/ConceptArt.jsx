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
          <h2>Concept art</h2>
          <div className="illu-linkto-cards">
            <Link to={`/illustration/drenay`} className="linkto-card filter-drenay">
                <h3>Drenay</h3>
            </Link>
            <Link to={`/illustration/cloudcity`} className="linkto-card filter-cloudcity">
                <h3>CloudCity</h3>
            </Link>
          </div>

          <div className="subillu-gallery">
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
    </div>
  );
}

export default Vector;