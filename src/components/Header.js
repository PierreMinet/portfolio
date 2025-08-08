import Nav from "./Nav";
import logo from '../images/logo.webp';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <Link to="/" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} style={{marginLeft:"50%", transform:"translateX(-50%)"}}><img src={logo} width={300} height={150} alt="Logo" /></Link>
            <Nav />
        </header>
    );
};

export default Header;