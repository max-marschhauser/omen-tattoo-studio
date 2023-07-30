import "./navbar.scss";

import OmenLogo from "../assets/images/OMEN logo.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<a href="#">RADOVI</a>
			<a href="#">DIZAJN</a>
			<a>
				<img src={OmenLogo} alt="Omen logo" />
			</a>
			<a href="#">UMJETNICA</a>
			<a href="#">KONTAKT</a>
		</nav>
	);
}
