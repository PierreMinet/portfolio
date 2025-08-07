import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

function Nav() {
    return (
        <nav>
            <ul>
                <Link className="nav-button" to="/projects">Projects</Link>
                <Link className="nav-button" to="/contact">Contact</Link>
                <a className="nav-button"
                href="https://www.linkedin.com/in/pierre-minet-853450369"
                rel="noreferrer"
                target="_blank"><span style={{fontSize:"1.2rem"}}><AiFillLinkedin /></span></a>
                <a className="nav-button"
                href="https://www.instagram.com/pierrem.designs"
                rel="noreferrer"
                target="_blank"><span style={{fontSize:"1.2rem"}}><AiFillInstagram /></span></a>
                <a className="nav-button"
                href="https://github.com/PierreMinet"
                rel="noreferrer"
                target="_blank"><span style={{fontSize:"1.2rem"}}><AiFillGithub /></span></a>
            </ul>
        </nav>
    );
};

export default Nav;