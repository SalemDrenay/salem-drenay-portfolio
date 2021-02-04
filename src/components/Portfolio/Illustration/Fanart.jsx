import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Navbar from '../../reusables/Navbar';
import { photos } from "../../galleries/Fanart/gallery-fanart";
import '../../../assets/css/styles.css';

function Fanart() {
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
          <h2>Fanart</h2>
          <div className="illu-linkto-cards">
            <Link to={`/illustration/fanart/digimon`} className="linkto-card filter-digimon">
                <h3>Digimon</h3>
            </Link>
            <Link to={`/illustration/fanart/pokemon`} className="linkto-card filter-pokemon">
                <h3>Pokémon</h3>
            </Link>
            <Link to={`/illustration/fanart/harrypotter`} className="linkto-card filter-poudlard">
                <h3>Harry Potter</h3>
            </Link>
            <Link to={`/illustration/fanart/hollowknight`} className="linkto-card filter-hollowknight">
                <h3>Hollow Knight</h3>
            </Link>
            <Link to={`/illustration/fanart/ori`} className="linkto-card filter-ori">
                <h3>Ori</h3>
            </Link>
            <Link to={`/illustration/fanart/cartoons`} className="linkto-card filter-cartoons">
                <h3>Cartoons &amp; mangas</h3>
            </Link>
            <Link to={`/illustration/fanart/lifeisstrange`} className="linkto-card filter-LiS">
                <h3>Life is strange</h3>
            </Link>
            <Link to={`/illustration/fanart/nightinthewoods`} className="linkto-card filter-NitW">
                <h3>Night in the woods</h3>
            </Link>
            <Link to={`/illustration/fanart/shovelknight`} className="linkto-card filter-shovelknight">
                <h3>Shovel Knight</h3>
            </Link>
            <Link to={`/illustration/fanart/wonderboy`} className="linkto-card filter-wonderboy">
                <h3>Wonderboy and the dragon's trap</h3>
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

export default Fanart;