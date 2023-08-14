import NavbarPages from "../../navbar/NavbarPages.tsx";

import "../pages.scss";
import "./radovi.scss";

export default function Radovi() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<h1 className="page-title">Radovi</h1>
				<div>page content</div>
			</main>
		</>
	);
}
