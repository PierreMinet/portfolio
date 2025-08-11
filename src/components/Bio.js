import hero from '../images/bio_pic.webp';
import { motion } from "motion/react";

function Bio() {
    return (
        <>
        <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2, type: "tween" } }}
        viewport={{ once:"true", amount: .5 }}
         style={{marginLeft:"auto", marginRight:"auto", marginBottom:"2rem"}}>Who am I ?</motion.h3>
        <article className="bio">
            <img style={{margin:"auto"}} src={hero} width={400} height={403} alt="Me" />
            <p>I am a <b>junior front-end developer</b> who works mainly with <b>React JS</b>, as it is a highly modular framework and offers a multitude of possibilities. When I was 14, I discovered <b>HTML</b> and <b>CSS</b> for the first time in my life ; sure, I just played around with it a bit back then, because I was still at school and just wanted to try it out for fun.</p>
            <p>Then, years later, I discovered the software <b>Game Maker Studio</b> as I wanted to recreate an old browser game that I used to play when I was younger. That was my first exposure to programming languages. I am still working with this program and I improved a lot in my algorithmic skills thanks to this. I also have strong knowledge of functional programming and data structures based on what I worked on for that project.</p>
            <p>In <b>2024</b>, I was facing a crisis : as a worker in logistics, I felt like something was missing.</p>
            <p>That was when I realized that I wanted a drastic change in my life. Coding my game brought me so much, and I wanted to feel the same way about my career choices.</p>
            <p>I enrolled in two e-learnings : for months, I studied, experimented, and worked on several projects to train and improve. I successfully passed both of those courses, and gained strong knowledge in <b>HTML, CSS, JavaScript, UI & UX design (Figma), Git and GitHub,</b> and most importantly, <b>React JS</b></p>
            <p>I now stand here, ready to pursue this journey, by working on new projects, and maybe becoming the employee that you are looking for in your company !</p>
            <p>On a side note : I am also an <b>experienced music producer</b> (more than 8 years) with many releases, I am interested in <b>video editing</b>, and as I mentioned earlier, I am constantly improving my programming skills working with <b>Game Maker Studio</b>. I also want to learn more about <b>back-end</b> in the future.</p>
        </article>
        </>
    );
};

export default Bio;