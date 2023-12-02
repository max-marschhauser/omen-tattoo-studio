import { NavLink } from "react-router-dom";

import NavbarPages from "../../layout/navbar/NavbarPages.tsx";

import "../pages.scss";
import "./radovi.scss";

import naslovnaTattoo from "../../assets/images/radovi/naslovneSlike/naslovnaTattoo.png";
import naslovnaDizajn from "../../assets/images/radovi/naslovneSlike/naslovnaDizajn.png";

export default function Radovi() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="title-images">
					<NavLink className="navbar-item" to="/radovi/tetovaze">
						<img src={naslovnaTattoo} alt="Tetovaže" />
					</NavLink>
					<NavLink className="navbar-item" to="/radovi/dizajn">
						<img src={naslovnaDizajn} alt="Dizajn" />
					</NavLink>
				</div>
			</main>
		</>
	);
}
