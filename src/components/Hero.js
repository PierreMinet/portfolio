import { motion } from "motion/react";

function Hero() {
    return (
        <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3, type: "tween" }}
        className="hero-banner">
            <h1>Junior Front End Developer</h1>
            <h2>Graphic Designer</h2>
        </motion.article>
    );
};

export default Hero;