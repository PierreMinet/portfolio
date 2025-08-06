import hero from '../images/bio_pic.webp';
import { motion } from "motion/react";

function Bio() {
    return (
        <>
        <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 1, duration: 3, type: "tween" } }}
        viewport={{ once:"true", amount: .5 }}
         style={{marginLeft:"auto", marginRight:"auto", marginBottom:"2rem"}}>Who am I ?</motion.h3>
        <article className="bio">
            <img style={{margin:"auto"}} src={hero} width={400} height={403} alt="Me" />
            <p>I am a <b>Junior Front End developer</b> who works mainly with <b>React JS</b>, as it is a highly modular language and offers a multitude of possibilities. When I was 14, I discovered <b>HTML</b> and <b>CSS</b> for the first time in my life ; sure I just played around with it a bit back then, because I was still at school and just wanted to try it out for fun.</p>
            <p>Then, years after, I discovered the software <b>Game Maker Studio</b> as I wanted to re-create an old browser game that I was playing when I was younger, that was my first approach to programing languages, I am still working with this program and I improved a lot on my algorithmic skills, I also have strong knowledges on functional programing and data structures because of this.</p>
            <p>In <b>2024</b>, I was facing a crisis : as a worker in logistics, I felt like something was missing.</p>
            <p>That is when I realized that I wanted a drastic change in my life, coding my game brought me so much, and I could see myself doing this as a job.</p>
            <p>I enrolled in two e-learnings, for months I studied, experimented, and worked on several projects to train and improve. I successfully passed both of those courses, and gained strong knowledges in <b>HTML, CSS, JavaScript, UI & UX design (Figma), Git and GitHub,</b> and most importantly <b>React JS</b></p>
            <p>I also have strong experience with <b>FL Studio</b> and <b>Game Maker Studio</b></p>
            <p>I worked with multiple artists and created <b>multiple artworks</b> throughout the years, but also social media content and videos.</p>
        </article>
        </>
    );
};

export default Bio;