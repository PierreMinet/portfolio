import Bio from './Bio.js';
import Projects from './Projects.js';
import Overview from './Overview.js';
import Skills from './Skills.js';
import Hero from './Hero.js';
import Designs from './Designs.js';
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
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .5 }}
            className='filled-title'>Projects</motion.h2>
            <Projects />
            <div className='separator'></div>
            <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .5 }}
            className='outlined-title'>Designs</motion.h2>
            <Designs />
            <div className='separator'></div>
            <motion.h2
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .5 }}
            className='filled-title'>Tools & skills</motion.h2>
            <Skills />
            <div className='separator'></div>
            <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .5 }}
            className='outlined-title'
            style={{marginRight:"auto"}}>About me</motion.h2>
            <Bio />
        </>
    );
}

export default HomePage;