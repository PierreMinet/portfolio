import { motion } from "motion/react";

function Contact() {
    return (
        <>
            <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "tween" }}
            className="hero-banner">
                <h1>Contact Me</h1>
            </motion.article>

            <div className='separator'></div>

            <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2, type: "tween" }}>
                <div style={{textAlign:"center"}}>
                    <p>For any <b>question</b>, <b>inquiry</b>, <b>offer</b> or <b>custom project</b>, please reach me by e-mail :</p>
                    <p>pierrem.designs@gmail.com</p>
                    <p>A contact form will be available <b>soon</b></p>
                </div>
            </motion.article>
        </>
    );
};

export default Contact;