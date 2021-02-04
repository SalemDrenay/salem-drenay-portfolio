import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../../reusables/Navbar';
import { photos } from "../../../galleries/Conceptart/gallery-cloudcity";
import '../../../../assets/css/styles.css';

function Drenay() {
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
            <h2>Drenay</h2>
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

export default Drenay;