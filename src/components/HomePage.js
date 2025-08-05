import Bio from './Bio.js';
import Projects from './Projects.js';
import Overview from './Overview.js';
import Hero from './Hero.js';

function HomePage() {
    return (
        <>
            <Hero />
            <div className='separator'></div>
            <Overview />
            <div className='separator'></div>
            <h2 className='filled-title'>Projects</h2>
            <Projects />
            <div className='separator'></div>
            <h2 className='outlined-title'>Skills</h2>
            <Bio />
        </>
    );
}

export default HomePage;