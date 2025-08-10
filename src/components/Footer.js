import logo from '../images/logo.webp';
import { BsFillPinMapFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div style={{alignItems:"center"}}>
                <img src={logo} width={300} height={150} alt="Logo" />
            </div>
            <div className='footer-list'>
                <ul>
                    <h5 key="Navigation">Navigation</h5>
                    <Link key="Home" className="footer-link" to="/">Home</Link>
                    <Link key="Projects" className="footer-link" to="/projects">Projects</Link>
                    <Link key="Designs" className="footer-link" to="/designs">Designs</Link>
                    <Link key="Contact" className="footer-link" to="/contact">Contact</Link>
                </ul>
                <ul>
                    <h5 key="Socials">Socials</h5>
                    <a key="Linkedin" className="footer-link"
                    href="https://www.linkedin.com/in/pierre-minet-853450369"
                    rel="noreferrer"
                    target="_blank">Linkedin</a>
                    <a key="Instagram" className="footer-link"
                    href="https://www.instagram.com/pierrem.designs"
                    rel="noreferrer"
                    target="_blank">Instagram</a>
                    <a key="GitHub" className="footer-link"
                    href="https://github.com/PierreMinet"
                    rel="noreferrer"
                    target="_blank">GitHub</a>
                </ul>
                <ul>
                    <h5 key="Location">Location</h5>
                    <p key="Address" style={{transform:"translateY(-3px)"}}>3870, Heers, Belgium <span style={{marginLeft:"0.2rem"}}><BsFillPinMapFill /></span></p>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;