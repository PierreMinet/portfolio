import { FiBookmark, FiTrendingUp, FiTool, FiAward  } from "react-icons/fi";
import { motion } from "motion/react";

const webSkills = [
    "HTML5",
    "CSS3",
    "Version Control",
    "JavaScript",
    "React JS",
    "Web Hosting",
    "UX / UI Design",
    "Graphic Design",
    "XML",
];

const learnSkills = [
    "Native PHP",
    "MySQL",
    "TypeScript",
    "Laravel",
];

const otherSkills = [
    "Music Production",
    "Video Editing",
    "GML (Game Maker Language)",
    "Fluent In French",
    "Fluent In English",
    "Basis In Spanish",
];

const tools = [
    "VS Code",
    "XAMPP",
    "WinSCP (FTP)",
    "PHPMyAdmin",
    "Git",
    "GitHub",
    "Figma",
    "Bootstrap",
    "Formik",
    "Yulp",
    "Photoshop",
    "Premiere Pro",
    "After Effect",
];

const credentials = [
    "Literature High School Diploma (France)",
    "Photoshop Diploma",
    "Webdesign Diploma",
    "Meta Front-End Certification",
];

const webSkillsDisplay = webSkills.map((skill) => {
    return <div className="skill"><span>{skill}</span><span><FiBookmark /></span></div>
});

const learnSkillsDisplay = learnSkills.map((skill) => {
    return <div className="skill"><span>{skill}</span><span><FiTrendingUp /></span></div>
});

const otherSkillsDisplay = otherSkills.map((skill) => {
    return <div className="skill"><span>{skill}</span><span><FiBookmark /></span></div>
});

const toolsDisplay = tools.map((tool) => {
    return <div className="skill"><span>{tool}</span><span><FiTool /></span></div>
});

const credentialsDisplay = credentials.map((tool) => {
    return <div className="skill"><span>{tool}</span><span><FiAward /></span></div>
});

function Skills() {
    return (
        <>
        <article
        style={{flexDirection:"column"}}>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 3, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
                <h3 style={{marginLeft:"auto", marginRight:"auto"}}>Skills related to web</h3>
                <div className="skills-wrapper">
                {webSkillsDisplay}
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 3, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
                <h3 style={{marginLeft:"auto", marginRight:"auto"}}>Skills I started learning / want to learn</h3>
                <div className="skills-wrapper">
                {learnSkillsDisplay}
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 3, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
                <h3 style={{marginLeft:"auto", marginRight:"auto"}}>Other skills</h3>
                <div className="skills-wrapper">
                {otherSkillsDisplay}
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 3, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
                <h3 style={{marginLeft:"auto", marginRight:"auto"}}>Tools</h3>
                <div className="skills-wrapper">
                {toolsDisplay}
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 3, type: "tween" } }}
            viewport={{ once:"true", amount: .5 }}>
                <h3 style={{marginLeft:"auto", marginRight:"auto"}}>Credentials</h3>
                <div className="skills-wrapper">
                {credentialsDisplay}
                </div>
            </motion.div>
        </article>
        </>
    );
};

export default Skills;