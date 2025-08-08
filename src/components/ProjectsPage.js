import { motion } from "motion/react";
import Card from "./Card";
import MangataGallo from '../images/projects/mangata-gallo.webp';
import LittleLemon from '../images/projects/little-lemon.webp';
import PierreDesigns from '../images/projects/pierrem.webp';
import GroceryApp from '../images/projects/grocery-app.webp';
import PhpLogin from '../images/projects/php-login.webp';
import Neverland from '../images/projects/neverland.webp';
import DarkOrbit from '../images/projects/darkorbit.webp';

const webProjects = [
    {
        name: 'Mangata Gallo',
        description: 'A mock-up website I made for my HTML/CSS exam during my Meta front-end developer course.',
        url: 'https://github.com/PierreMinet/mangata-gallo',
        image: MangataGallo,
        released: true,
    },
    {
        name: 'Little Lemon Reservation',
        description: 'This is my final exam task for my Meta front-end developer course, a basic table booking system for a fictional restaurant using React, Formik, Yulp, useReducer and a fake API call.',
        url: 'https://github.com/PierreMinet/little-lemon-book',
        image: LittleLemon,
        released: true,
    },
    {
        name: 'My older website',
        description: 'This is the previous version of this website, where I was featuring my designs only, using HTML, CSS, native JS, PHP, XML and MySQL.',
        url: 'https://pierrem-designs.be',
        image: PierreDesigns,
        released: true,
    },
    {
        name: 'PHP Basic Login / Register',
        description: 'This is a small really basic login / register system in native PHP, using client side and server side validation, secured against SQL injections. This is currently working, but can be modified at any time.',
        url: 'https://pierrem-designs.be',
        image: PhpLogin,
        released: true,
    },
    {
        name: 'Grocery App',
        description: "A small digital grocery list I'm currently working on, the first version was in Native JS / HTML / PHP, but I am planning on switching it to React JS / Laravel instead.",
        url: 'https://pierrem-designs.be',
        image: GroceryApp,
        released: false,
    },
    {
        name: 'Neverland Records',
        description: "The website for a record label called Neverland Records, I am mostly working on the interface and not the backend part of it.",
        url: 'https://pierrem-designs.be',
        image: Neverland,
        released: false,
    },
];

const otherProjects = [
    {
        name: 'DarkOrbit Classic (GML)',
        description: "My biggest project so far : re-creating the browser game DarkOrbit in its 2009 state using Game Maker Studio ! Check the discord server for updates !",
        url: 'https://pierrem-designs.be',
        image: DarkOrbit,
        released: false,
        discord: "https://discord.gg/WMkvgpVhCM",
    },
];

const displayProject = (origin) => {
    return origin.map(project => (
        <Card key={project.name} display={project} />
    ));
};

const displayWebProjects = displayProject(webProjects);
const displayOtherProjects = displayProject(otherProjects);

function ProjectPage() {
    return (
        <>
            <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "tween" }}
            className="hero-banner">
                <h1>All my projects</h1>
                <h2>Web and more</h2>
            </motion.article>

            <div className='separator'></div>

            <motion.h2
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .5 }}
            className='filled-title'>Web Projects</motion.h2>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .2 }}
            style={{ display:'flex', flexWrap:'wrap', gap:'3rem', justifyContent:'center'}}>
                {displayWebProjects}
            </motion.div>

            <div className='separator'></div>

            <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .5 }}
            className='outlined-title'>Other Projects</motion.h2>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once:"true", amount: .2 }}
            style={{ display:'flex', flexWrap:'wrap', gap:'3rem', justifyContent:'center', marginBottom:'2rem'}}>
                {displayOtherProjects}
            </motion.div>
        </>
    );
};

export default ProjectPage;