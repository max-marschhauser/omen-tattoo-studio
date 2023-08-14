import { NavLink } from "react-router-dom";

import NavbarPages from "../../layout/navbar/NavbarPages.tsx";

import "../pages.scss";
import "./radovi.scss";

import Image1 from "../../assets/images/radovi/img1.png";
import Image2 from "../../assets/images/radovi/img2.png";

export default function Radovi() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="title-images">
					<NavLink className="navbar-item" to="/radovi/tetovaze">
						<img src={Image1} alt="Tetovaže" />
					</NavLink>
					<NavLink className="navbar-item" to="/radovi/dizajn">
						<img src={Image2} alt="Dizajn" />
					</NavLink>
				</div>
			</main>
		</>
	);
}
