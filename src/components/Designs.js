import Artwork1 from "../images/artworks/artwork30.webp";
import Artwork2 from "../images/artworks/artwork37.webp";
import Artwork3 from "../images/artworks/artwork38.webp";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "motion/react";

const imgSize = 450;

function Designs() {
    return (
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
            <div>
                <Link className="nav-button" to="/designs" style={{margin:"auto"}}>Browse all designs
                <span style={{marginLeft:"0.2rem", transform:"translateY(2.5px)"}}><AiOutlineArrowRight /></span></Link>
            </div>
        </motion.article>
    );
};

export default Designs;