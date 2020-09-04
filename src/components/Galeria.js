import { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const imageDimensions = (file) =>
  new Promise((resolve, reject) => {
    const img = new Image();

    // the following handler will fire after the successful loading of the image
    img.onload = () => {
      const { naturalWidth: width, naturalHeight: height } = img;
      resolve({ width, height });
    };

    // and this handler will fire if there was an error with the image (like if it's not really an image or a corrupted one)
    img.onerror = () => {
      reject("There was some problem with the image.");
    };

    img.src = file;
  });

const Galeria = ({ photos }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const screens = useBreakpoint();

  useEffect(() => {
    const makeImages = async () => {
      const imagePromises = photos.map(async (image) => {
        const { width, height } = await imageDimensions(image);

        return {
          src: image,
          width,
          height,
        };
      });

      const newImages = await Promise.all(imagePromises);
      setImages(newImages);
    };

    if (photos) makeImages();
  }, [photos]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setSelectedImage(index);
  }, []);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (!images.length) return null;

  return (
    <>
      <Gallery
        onClick={openLightbox}
        photos={images}
        columns={screens.md ? 3 : 1}
        direction="column"
      />
      <ModalGateway>
        {selectedImage !== null ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={selectedImage}
              views={images.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default Galeria;
