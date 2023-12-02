import NavbarPages from "../../layout/navbar/NavbarPages.tsx";
import UmjetnicaImg from "../../assets/images/umjetnica/umjetnica.jpg";

import "../pages.scss";
import "./umjetnica.scss";

import umjetnicaOpis from "../../data/umjetnicaOpis.ts";

export default function Umjetnica() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="imgAndTextUmjetnica">
					<img src={UmjetnicaImg} alt="Umjetnica" />
					<p className="text">
						{umjetnicaOpis.map((e) => (
							<p>{e}</p>
						))}
					</p>
				</div>
			</main>
		</>
	);
}
