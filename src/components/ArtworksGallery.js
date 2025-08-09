import { useEffect, useState } from "react";

function ArtworksGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/gallery.php")
        .then(res => res.json())
        .then(data => setImages(data))
        .catch(err => console.error(err));
    }, []);

    return (
        
    )

};

export default ArtworksGallery;