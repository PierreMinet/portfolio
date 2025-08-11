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
                    return (
                    <motion.div className="artwork-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 2, type: "tween" } }}
                    viewport={{ once:"true", amount: .2 }}>
                        <img src={img.src} width={imgSize} height={imgSize} alt={img.alt} loading="lazy" />
                    </motion.div>
                    );
                })}
            </div>
        </motion.article>
    )

};

export default ArtworksGallery;