import NavbarPages from "../../navbar/NavbarPages.tsx";

import "../pages.scss";
import "./umjetnica.scss";

export default function Umjetnica() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<h1 className="page-title">Umjetnica</h1>
				<div>page content</div>
			</main>
		</>
	);
}
