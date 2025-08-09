import logo from '../images/logo.webp';
import { BsFillPinMapFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div style={{alignItems:"center"}}>
                <img src={logo} width={300} height={150} alt="Logo" />
            </div>
            <div className='footer-list' style={{paddingTop:"3rem"}}>
                <ul>
                    <h5>Navigation</h5>
                    <Link className="footer-link" to="/">Home</Link>
                    <Link className="footer-link" to="/projects">Projects</Link>
                    <Link className="footer-link" to="/designs">Designs</Link>
                    <Link className="footer-link" to="/contact">Contact</Link>
                </ul>
                <ul>
                    <h5>Location</h5>
                    <p>3870, Heers, Belgium <span style={{marginLeft:"0.2rem"}}><BsFillPinMapFill /></span></p>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;