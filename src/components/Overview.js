import hero from '../images/bio_pic.webp';
import { motion } from "motion/react";

function Overview() {
    return (
        <>
            <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2, type: "tween" }}
            >
                <div className="half-div">
                    <div className='quote' style={{display:"flex"}}>
                        <h3>"My name is Pierre, and this is what I do"</h3>
                    </div>
                    <p>I am a <b>Junior Front End Developer</b> based in <b>Belgium</b>. I mostly work with <b>React</b>, and I am also an <b>experienced graphic designer</b> who worked in <b>the music industry</b>.</p>
                    <p>I have learned and I am actively practicing <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript ES6</b>, <b>XML</b>, <b>React JS</b>, <b>Git / GitHub</b>, <b>Figma</b>, <b>Photoshop CC</b>, <b>Premiere Pro</b>, and <b>After Effects</b>.</p>
                    <p>I am actively working on various <b>web projects</b>, and learning new skills <b>as much as possible</b>.</p>
                    </div>
                <div className="half-div">
                    <img src={hero} width={400} height={403} alt="Me" />
                </div>
            </motion.article>
        </>
    );
};

export default Overview;