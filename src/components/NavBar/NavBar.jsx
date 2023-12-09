import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Funkos Pe</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos/marvel">Marvel</Link></li>
                <li><Link className="menu-link" to="/productos/anime">Anime</Link></li>
                <li><Link className="menu-link" to="/productos/pokemon">Pokemon</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar