import Gallery from "react-photo-gallery";

const Galeria = (photos) => {
    console.log('PhotoG', photos)
    return (
        <Gallery photos={photos} columns={3} direction="column" />
    )
}

export default Galeria 