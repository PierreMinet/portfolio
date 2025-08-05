import hero from '../images/bio_pic.webp';

function Overview() {
    return (
        <>
        <article>
            <div className="half-div">
            <h3>My name is Pierre, and this is what I do</h3>
            <p>I am a <b>Junior Front End developer</b> who works mainly with <b>React JS</b>, but also an <b>experienced graphic designer</b> who worked in the music industry, and an UI & UX designer.</p>
            <p>Working with <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>React JS</b>, <b>Git / GitHub</b>, <b>Figma</b>, <b>Photoshop CC</b>, <b>Premiere Pro</b>, and <b>After Effect</b>.</p>
            <p>I worked on several <b>web projects</b>, mainly focused on <b>React JS</b>.</p>
            </div>
            <div className="half-div">
                <img src={hero} width={400} height={403} alt="Hero image" />
            </div>
        </article>
        </>
    );
};

export default Overview;