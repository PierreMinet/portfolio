import Bio from './Bio.js';
import Projects from './Projects.js';
import Overview from './Overview.js';
import Hero from './Hero.js';
import { motion } from "motion/react";

function HomePage() {
    return (
        <>
            <Hero />
            <div className='separator'></div>
            <Overview />
            <div className='separator'></div>
            <motion.h2
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } }}
            viewport={{ amount: .5 }}
            className='filled-title'>Web Projects</motion.h2>
            <Projects />
            <div className='separator'></div>
            <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } }}
            viewport={{ amount: .5 }}
            className='outlined-title'>Designs</motion.h2>
            <div className='separator'></div>
            <motion.h2
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } }}
            viewport={{ amount: .5 }}
            className='filled-title'>Tools</motion.h2>
            <Bio />
        </>
    );
}

export default HomePage;