import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import MenuContext from "../context/MenuContext";

function Hero() {
    const { setMenuVisible } = useContext(MenuContext);
    return (
        <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
        className="hero-banner">
            <h1>Junior Front End Developer</h1>
            <h2>Graphic Designer</h2>
            <Link className="cta" to="/projects" onClick={() => setMenuVisible(false)}>Discover my projects
            <span style={{marginLeft:"0.2rem", transform:"translateY(2.5px)"}}><AiOutlineArrowRight /></span></Link>
        </motion.article>
    );
};

export default Hero;