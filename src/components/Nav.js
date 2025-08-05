import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <Link className="nav-button" to="/">Home</Link>
                <Link className="nav-button" to="/">Projects</Link>
                <Link className="nav-button" to="/">About</Link>
            </ul>
        </nav>
    );
};

export default Nav;