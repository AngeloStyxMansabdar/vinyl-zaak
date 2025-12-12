import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <img src="/src/img/vinyl-logo.png" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/collection">Collectie</Link>
            <Link to="/community">Community</Link>
            <Link to="/overons">Over ons</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
