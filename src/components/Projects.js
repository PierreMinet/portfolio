import Card from "./Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Project1 from '../images/projects/mangata-gallo.webp';
import Project2 from '../images/projects/little-lemon.webp';
import Project3 from '../images/projects/pierrem.webp';
import { motion } from "motion/react";

const featuredProjects = [
    {
        name: 'Mangata Gallo',
        description: 'This is a mock-up website I made for my HTML/CSS exam during my Meta front-end developer course.',
        url: 'https://github.com/PierreMinet/mangata-gallo',
        image: Project1,
        released: true,
    },
    {
        name: 'Little Lemon Reservation',
        description: 'This is my final exam task for my Meta front-end developer course, a basic table booking system for a fictional restaurant using React, Formik, Yulp, useReducer and a fake API call.',
        url: 'https://github.com/PierreMinet/little-lemon-book',
        image: Project2,
        released: true,
    },
    {
        name: 'My older website',
        description: 'This is the previous version of this website, where I was featuring my designs only, using HTML, CSS, native JS, PHP, XML and MySQL.',
        url: 'https://pierrem-designs.be',
        image: Project3,
        released: true,
    },
];

const displayProjects = featuredProjects.map(project => {
    return <Card key={project.name} display={project} />
});

function Projects() {
    return (
        <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once:"true", amount: .5 }}
        style={{ flexDirection:'column'}}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem'}}>
                {displayProjects}
            </div>
            <Link className="nav-button" to="/projects">Browse all projects
                <span style={{marginLeft:"0.2rem", transform:"translateY(2.5px)"}}><AiOutlineArrowRight /></span></Link>
        </motion.article>
    );
};

export default Projects;