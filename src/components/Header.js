import Nav from "./Nav";
import logo from '../images/logo.webp';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div></div>
            <div><Link to="/" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}><img src={logo} width={300} height={150} alt="Logo" /></Link></div>
            <div><Nav /></div>
        </header>
    );
};

export default Header;