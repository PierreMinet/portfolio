import GalleryContext from "../context/GalleryContext";
import { useContext } from "react";

function GalleryNav() {
    const { galleryVisible, setGalleryVisible } = useContext(GalleryContext);

    return (
        <article style={{marginTop:"4rem"}}>
            <button
            onClick={() => {setGalleryVisible("artworks")}}
            className={galleryVisible === "artworks" ? ('button-highlight') : (null)}>Artworks</button>
            <button
            onClick={() => {setGalleryVisible("covers")}}
            className={galleryVisible === "covers" ? ('button-highlight') : (null)}>Book Covers</button>
            <button
            onClick={() => {setGalleryVisible("socials")}}
            className={galleryVisible === "socials" ? ('button-highlight') : (null)}>Social Assets</button>
        </article>
    );
};

export default GalleryNav;