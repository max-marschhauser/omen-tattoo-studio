import NavbarPages from "../../navbar/NavbarPages.tsx";

import "../pages.scss";
import "./kontakt.scss";

export default function Kontakt() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<h1 className="page-title">Kontakt</h1>
				<div>page content</div>
			</main>
		</>
	);
}
