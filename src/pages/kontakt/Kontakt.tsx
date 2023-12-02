import NavbarPages from "../../layout/navbar/NavbarPages.tsx";
import Logo from "../../assets/images/logo/OMEN-logo-white.png";

import "../pages.scss";
import "./kontakt.scss";

import kontaktPodaci from "../../data/kontaktPodaci.ts";

export default function Kontakt() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="imgAndTextContact">
					<p className="text">
						{kontaktPodaci.map((e) => (
							<p>{e}</p>
						))}
					</p>
					<img src={Logo} alt="logo" />
				</div>
			</main>
		</>
	);
}
