import { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";

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
    useEffect(() => {
        const makeImages = async () => {
            const imagePromises = photos.map(async (image) => {
                const { width, height } = await imageDimensions(image);

                return {
                    src: image,
                    width,
                    height
                };

            });

            const newImages = await Promise.all(imagePromises);
            setImages(newImages);
        };

        if (photos) makeImages();
    }, [photos]);

    if (!images.length) return null;

    return <Gallery photos={images} columns={3} direction="column" />;
};

export default Galeria;