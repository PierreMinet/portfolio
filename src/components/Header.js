import Nav from "./Nav";
import logo from '../images/logo.webp';

function Header() {
    return(
        <header>
            <img src={logo} width={300} height={150} alt="Logo" />
            <Nav />
        </header>
    );
};

export default Header;