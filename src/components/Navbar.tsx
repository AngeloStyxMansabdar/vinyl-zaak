import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/collection">Collectie</Link>
            <Link to="/community">Community</Link>
        </nav>
    );
};

export default Navbar;
