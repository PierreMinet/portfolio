import logo from '../images/logo.webp';
import { BsFillPinMapFill } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} width={300} height={150} alt="Logo" />
            </div>
            <div>
                <p>Bla</p>
            </div>
        </footer>
    );
};

export default Footer;