import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <div>
            <nav>
                <ul className="navlist">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/books">Books</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;