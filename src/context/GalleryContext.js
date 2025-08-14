import { createContext } from "react";

const GalleryContext = createContext({
    galleryVisible: "artworks",
    setGalleryVisible: () => {}
});

export default GalleryContext;