import { motion } from "motion/react";
import Artwork1 from "../images/artworks/artwork30.webp";
import Artwork2 from "../images/artworks/artwork37.webp";
import Artwork3 from "../images/artworks/artwork38.webp";

const imgSize = 450;

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

            <div className='separator'></div>

            <motion.article
            style={{flexDirection:"column"}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
                <div className="skills-wrapper" style={{gap:"2rem", marginBottom:"0.5rem"}}>
                    <div className="artwork-wrapper">
                        <img src={Artwork1} width={imgSize} height={imgSize} alt="Artwork 1" />
                    </div>
                    <div className="artwork-wrapper">
                        <img src={Artwork2} width={imgSize} height={imgSize} alt="Artwork 2" />
                    </div>
                    <div className="artwork-wrapper">
                        <img src={Artwork3} width={imgSize} height={imgSize} alt="Artwork 3" />
                    </div>
                </div>
            </motion.article>
        </>
    );
};

export default DesignsPage;