import { NavLink } from "react-router-dom";
import OmenLogo from "../../assets/images/OMEN-logo.png";
import "./navbar.scss";

export default function NavbarPages() {
	return (
		<nav className="navbar-pages">
			<NavLink className="navbar-item" to="/radovi">
				RADOVI
			</NavLink>
			<NavLink className="navbar-item" to="/savjeti">
				SAVJETI
			</NavLink>
			<NavLink to="/" className="navbar-image-mobile">
				<img src={OmenLogo} alt="Omen logo" />
			</NavLink>
			<NavLink className="navbar-item" to="/umjetnica">
				UMJETNICA
			</NavLink>
			<NavLink className="navbar-item" to="/kontakt">
				KONTAKT
			</NavLink>
		</nav>
	);
}
