import { NavLink } from "react-router-dom";
import OmenLogo from "../../assets/images/OMEN-logo.png";
import "./navbar.scss";

export default function NavbarHome() {
	return (
		<nav className="navbar-home">
			<NavLink className="navbar-item" to="/radovi">
				RADOVI
			</NavLink>
			<NavLink className="navbar-item" to="/savjeti">
				SAVJETI
			</NavLink>
			<img src={OmenLogo} alt="Omen logo" />
			<NavLink className="navbar-item" to="/umjetnica">
				UMJETNICA
			</NavLink>
			<NavLink className="navbar-item" to="/kontakt">
				KONTAKT
			</NavLink>
		</nav>
	);
}
