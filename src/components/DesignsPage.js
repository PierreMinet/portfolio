import { motion } from "motion/react";
import ArtworksGallery from "./ArtworksGallery";
import GalleryNav from "./GalleryNav";

function DesignsPage() {

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

            <ArtworksGallery />
        </>
    );
};

export default DesignsPage;