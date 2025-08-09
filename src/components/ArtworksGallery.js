import { useEffect, useState } from "react";
import { motion } from "motion/react";

const imgSize = 450;

function ArtworksGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/gallery.php")
        .then(res => res.json())
        .then(data => setImages(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <motion.article
            style={{flexDirection:"column"}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
            <div className="skills-wrapper" style={{gap:"2rem", marginBottom:"0.5rem"}}>
                {images.map((img, index) => {
                    <div className="artwork-wrapper">
                        <img src={img.src} width={imgSize} height={imgSize} alt={img.alt} loading="lazy" />
                    </div>
                })}
            </div>
        </motion.article>
    )

};

export default ArtworksGallery;