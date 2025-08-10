import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import MenuContext from "../context/MenuContext";

function Nav() {

    const { menuVisible, setMenuVisible } = useContext(MenuContext);

    return (
        <nav>
            <button aria-label="Menu" className={menuVisible ? "nav-burger-active nav-burger" : "nav-burger"} onClick={() => setMenuVisible(!menuVisible)}><span><FaBars /></span></button>
            <ul className={menuVisible ? "active burger-nav" : "burger-nav"}>
                <Link key="Projects" className="burger-link" to="/projects" onClick={() => setMenuVisible(!menuVisible)}>Projects</Link>
                <Link key="Contact" className="burger-link" to="/contact" onClick={() => setMenuVisible(!menuVisible)}>Contact</Link>
                <a key="Linkedin" className="burger-link"
                href="https://www.linkedin.com/in/pierre-minet-853450369"
                rel="noreferrer"
                onClick={() => setMenuVisible(!menuVisible)}
                target="_blank">Linkedin</a>
                <a key="Instagram" className="burger-link"
                href="https://www.instagram.com/pierrem.designs"
                rel="noreferrer"
                onClick={() => setMenuVisible(!menuVisible)}
                target="_blank">Instagram</a>
                <a key="GitHub" className="burger-link"
                href="https://github.com/PierreMinet"
                rel="noreferrer"
                onClick={() => setMenuVisible(!menuVisible)}
                target="_blank">GitHub</a>
            </ul>
            <ul className="default-nav">
                <Link key="Projects" className="nav-button" to="/projects">Projects</Link>
                <Link key="Contact" className="nav-button" to="/contact">Contact</Link>
                <a key="Linkedin" className="nav-button"
                href="https://www.linkedin.com/in/pierre-minet-853450369"
                rel="noreferrer"
                target="_blank"><span style={{fontSize:"1.2rem"}}><AiFillLinkedin /></span></a>
                <a key="Instagram" className="nav-button"
                href="https://www.instagram.com/pierrem.designs"
                rel="noreferrer"
                target="_blank"><span style={{fontSize:"1.2rem"}}><AiFillInstagram /></span></a>
                <a key="GitHub" className="nav-button"
                href="https://github.com/PierreMinet"
                rel="noreferrer"
                target="_blank"><span style={{fontSize:"1.2rem"}}><AiFillGithub /></span></a>
            </ul>
        </nav>
    );
};

export default Nav;