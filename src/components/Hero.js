import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Hero() {
    return (
        <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
        className="hero-banner">
            <h1>Junior Front End Developer</h1>
            <h2>Graphic Designer</h2>
            <Link className="cta" to="/">Discover my projects
            <span style={{marginLeft:"0.2rem", transform:"translateY(2.5px)"}}><AiOutlineArrowRight /></span></Link>
        </motion.article>
    );
};

export default Hero;