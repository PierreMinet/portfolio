import Nav from "./Nav";
import logo from '../images/logo.webp';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import MenuContext from "../context/MenuContext";

function Header() {
    const { setMenuVisible } = useContext(MenuContext);
    return(
        <header>
            <div></div>
            <div><Link to="/" onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'})
                setMenuVisible(false);
            }}><img src={logo} width={300} height={150} alt="Logo" /></Link></div>
            <div><Nav /></div>
        </header>
    );
};

export default Header;