import Bio from './Bio.js';
import Projects from './Projects.js';
import Overview from './Overview.js';

function HomePage() {
    return (
        <>
            <Overview />
            <Projects />
            <Bio />
        </>
    );
}

export default HomePage;