import NavbarPages from "../../layout/navbar/NavbarPages.tsx";

import "../pages.scss";
import "./umjetnica.scss";

export default function Umjetnica() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<h1 className="page-title">UMJETNICA</h1>
				<div>page content</div>
			</main>
		</>
	);
}
