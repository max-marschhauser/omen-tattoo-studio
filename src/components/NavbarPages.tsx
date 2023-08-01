import { NavLink } from "react-router-dom";
import OmenLogo from "../assets/images/OMEN logo.png";
import "./navbar.scss";

export default function NavbarPages() {
	return (
		<div className="box">
			<div className="box-inner">
				<nav className="navbar-pages">
					<NavLink to="/radovi">RADOVI</NavLink>
					<NavLink to="/dizajn">DIZAJN</NavLink>
					<NavLink to="/">
						<img src={OmenLogo} alt="Omen logo" />
					</NavLink>
					<NavLink to="/umjetnica">UMJETNICA</NavLink>
					<NavLink to="/kontakt">KONTAKT</NavLink>
				</nav>
			</div>
		</div>
	);
}
