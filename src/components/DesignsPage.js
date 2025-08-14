import { motion } from "motion/react";
import ArtworksGallery from "./ArtworksGallery";
import { useContext } from "react";
import GalleryContext from "../context/GalleryContext";
import GalleryNav from "./GalleryNav";

function DesignsPage() {
const { galleryVisible } = useContext(GalleryContext);
const galleries = {
    artworks: <ArtworksGallery />,
    covers: <ArtworksGallery />,
    socials: <ArtworksGallery />,
}

    return (
        <>
            <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "tween" }}
            className="hero-banner">
                <h1>All my designs</h1>
                <h2>Artworks and more</h2>
            </motion.article>

            <GalleryNav />

            <div className='separator'></div>
            {galleries[galleryVisible] || <h3>Invalid folder</h3>}
        </>
    );
};

export default DesignsPage;